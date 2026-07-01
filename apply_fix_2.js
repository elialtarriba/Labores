const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Replace the `.counter-notes` CSS
html = html.replace(
  /\.counter-notes\s*\{[\s\S]*?resize:\s*vertical;\s*\}/,
  `.counter-notes {
    width: 100%;
    min-height: 80px;
    font-size: 14px;
    line-height: 1.4;
    padding: 10px;
    border: 1px solid var(--cream-dark);
    border-radius: var(--radius);
    outline: none;
    background: rgba(255, 255, 255, 0.5);
    color: var(--text-main);
    font-family: inherit;
    resize: vertical;
    overflow-y: auto;
  }
  .counter-notes:empty:before, #note-zoom-textarea:empty:before {
    content: attr(data-placeholder);
    color: #999;
    pointer-events: none;
    display: block;
  }
  .counter-notes img, #note-zoom-textarea img {
    max-width: 100px;
    max-height: 100px;
    vertical-align: middle;
    cursor: zoom-in;
    border-radius: 4px;
    margin: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }`
);

// 2. CSS for note-zoom-textarea inside #modal-note-zoom .modal-body
html = html.replace(
  /resize:\s*none\s*!important;\s*\}/,
  `resize: none !important;
    overflow-y: auto !important;
  }`
);

// 3. Counter HTML templates (card)
html = html.replace(
  /<textarea class="counter-notes" placeholder="Notas de este contador..." style="margin-top: 0; padding-right: 36px;"\s*onblur="updateCounterNotes\('\$\{c\.id\}', this\.value\)"\>\$\{escapeAttr\(c\.notas\|\|''\)\}\<\/textarea\>/g,
  `<div class="counter-notes" contenteditable="true" data-placeholder="Notas de este contador..." style="margin-top: 0; padding-right: 36px;"
        onblur="updateCounterNotes('\${c.id}', this.innerHTML)">\${c.notas||''}</div>`
);

// 4. Counter zoom notes template
html = html.replace(
  /<textarea class="counter-notes" id="counter-zoom-notes" placeholder="Notas de este contador..." style="margin-top: 0; padding-right: 36px;"\>\<\/textarea\>/g,
  `<div class="counter-notes" id="counter-zoom-notes" contenteditable="true" data-placeholder="Notas de este contador..." style="margin-top: 0; padding-right: 36px;"></div>`
);

// 5. Note zoom modal textarea
html = html.replace(
  /<textarea id="note-zoom-textarea" placeholder="Escribe tus notas aquí con letra grande..."\s*style="([^"]+)"\>\<\/textarea\>/g,
  `<div id="note-zoom-textarea" contenteditable="true" data-placeholder="Escribe tus notas aquí con letra grande..."
        style="$1; overflow-y: auto;"></div>`
);

// 6. Update openCounterZoom
html = html.replace(
  /document\.getElementById\('counter-zoom-notes'\)\.value = c\.notas \|\| '';\s*document\.getElementById\('counter-zoom-notes'\)\.onblur = function\(\)\{ updateCounterNotes\(id, this\.value\); \};/g,
  `document.getElementById('counter-zoom-notes').innerHTML = c.notas || '';
  document.getElementById('counter-zoom-notes').onblur = function(){ updateCounterNotes(id, this.innerHTML); };`
);

// 7. Update openNoteZoom
html = html.replace(
  /const currentText = textarea \? textarea\.value : \(c\.notas \|\| ''\);/g,
  `const currentText = textarea ? textarea.innerHTML : (c.notas || '');`
);

html = html.replace(
  /const txtArea = document\.getElementById\('note-zoom-textarea'\);\s*txtArea\.value = currentText;/g,
  `const txtArea = document.getElementById('note-zoom-textarea');
  txtArea.innerHTML = currentText;`
);

html = html.replace(
  /const newVal = txtArea\.value;\s*updateCounterNotes\(id, newVal\);\s*if \(textarea\) textarea\.value = newVal;\s*const zoomNotesField = document\.getElementById\('counter-zoom-notes'\);\s*if \(zoomNotesField\) zoomNotesField\.value = newVal;/g,
  `const newVal = txtArea.innerHTML;
    updateCounterNotes(id, newVal);
    if (textarea) textarea.innerHTML = newVal;
    
    const zoomNotesField = document.getElementById('counter-zoom-notes');
    if (zoomNotesField) zoomNotesField.innerHTML = newVal;`
);

html = html.replace(
  /const text = document\.getElementById\('note-zoom-textarea'\)\.value \|\| '';/g,
  `const text = document.getElementById('note-zoom-textarea').innerHTML || '';`
);

html = html.replace(
  /const text = textarea \? textarea\.value : '';/g,
  `const text = textarea ? textarea.innerHTML : '';`
);


// 8. Add image viewer modal and paste event listener right before </body>
const scriptAndModal = `
<!-- ═══════════════ MODAL: VISOR DE IMAGEN ═══════════════ -->
<div class="modal-overlay" id="modal-image-viewer" onclick="if(event.target===this) closeModal('modal-image-viewer')">
  <div style="position: relative; max-width: 90vw; max-height: 90vh; display: flex; justify-content: center; align-items: center;">
    <button class="modal-close" onclick="closeModal('modal-image-viewer')" style="position: absolute; top: -40px; right: 0; color: white; background: rgba(0,0,0,0.5); border-radius: 50%; padding: 5px; z-index: 10;">✕</button>
    <img id="image-viewer-img" src="" style="max-width: 100%; max-height: 90vh; object-fit: contain; border-radius: 8px; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
  </div>
</div>

<script>
document.addEventListener('click', function(e) {
  if (e.target.tagName === 'IMG' && (e.target.closest('.counter-notes') || e.target.closest('#note-zoom-textarea'))) {
    document.getElementById('image-viewer-img').src = e.target.src;
    openModal('modal-image-viewer');
  }
});

document.addEventListener('paste', function(e) {
  const target = e.target;
  if (!target.isContentEditable) return;
  
  const items = (e.clipboardData || e.originalEvent.clipboardData).items;
  let imageItem = null;
  for (let i = 0; i < items.length; i++) {
    if (items[i].type.indexOf('image') === 0) {
      imageItem = items[i];
      break;
    }
  }

  if (imageItem) {
    e.preventDefault();
    const file = imageItem.getAsFile();
    const reader = new FileReader();
    reader.onload = function(event) {
      const img = new Image();
      img.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.6); 

        document.execCommand('insertImage', false, dataUrl);
      }
      img.src = event.target.result;
    }
    reader.readAsDataURL(file);
  } else {
    e.preventDefault();
    const text = (e.originalEvent || e).clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  }
});
</script>
</body>`;

html = html.replace('</body>', scriptAndModal);

fs.writeFileSync('index.html', html);
console.log('Fixed index.html with image paste feature!');
