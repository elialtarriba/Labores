const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
  `  #modal-note-zoom .modal {
    max-width: 100% !important;
    width: 100% !important;
    height: 100% !important;
    max-height: 100dvh !important;
    border-radius: 0 !important;
    margin: 0 !important;
    display: flex !important;
    flex-direction: row !important;
  }`,
  `  #modal-note-zoom .modal {
    max-width: 100% !important;
    width: 100% !important;
    height: 100% !important;
    max-height: 100dvh !important;
    border-radius: 0 !important;
    margin: 0 !important;
    display: flex !important;
    flex-direction: column !important;
  }`
);

html = html.replace(
  `    <div class="modal-footer" style="display:flex; justify-content:flex-end; gap:10px; padding-top:10px; border-top:1px solid var(--cream-dark);">
      <button class="btn btn-secondary" onclick="closeModal('modal-note-zoom')">Cancelar</button>
      <button class="btn btn-primary" id="note-zoom-save-btn">Guardar</button>
    </div>`,
  `    <div class="modal-footer" style="display:flex; justify-content:flex-end; gap:10px; padding-top:10px; border-top:1px solid var(--cream-dark); flex-wrap: wrap;">
      <button class="btn btn-secondary" onclick="printNoteZoom()" title="Imprimir notas" style="padding: 0 10px;">🖨️ Imprimir</button>
      <button class="btn btn-secondary" onclick="downloadNoteZoom()" title="Guardar como archivo" style="padding: 0 10px;">💾 Guardar TXT</button>
      <div style="flex-grow: 1;"></div>
      <button class="btn btn-secondary" onclick="closeModal('modal-note-zoom')">Cancelar</button>
      <button class="btn btn-primary" id="note-zoom-save-btn">Guardar</button>
    </div>`
);

html = html.replace(
  `    closeModal('modal-note-zoom');
  };
  
  openModal('modal-note-zoom');
}

/* Helper functions for counters */`,
  `    closeModal('modal-note-zoom');
  };
  
  openModal('modal-note-zoom');
}

window.printNoteZoom = function() {
  const titleText = document.getElementById('note-zoom-title').textContent || 'Notas';
  const text = document.getElementById('note-zoom-textarea').value || '';
  
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert("Por favor, permite las ventanas emergentes (pop-ups) para poder imprimir.");
    return;
  }
  
  const html = \`
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>\${titleText}</title>
        <style>
          body { font-family: sans-serif; padding: 20px; line-height: 1.6; color: #333; max-width: 800px; margin: 0 auto; }
          h1 { border-bottom: 1px solid #ccc; padding-bottom: 10px; margin-bottom: 20px; }
          .content { white-space: pre-wrap; font-size: 14px; }
        </style>
      </head>
      <body>
        <h1>\${titleText}</h1>
        <div class="content">\${text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
        <script>
          window.onload = function() { window.print(); window.close(); }
        </script>
      </body>
    </html>
  \`;
  
  printWindow.document.write(html);
  printWindow.document.close();
}

window.downloadNoteZoom = function() {
  const titleText = document.getElementById('note-zoom-title').textContent.replace('Notas: ', '').trim() || 'Notas';
  const text = document.getElementById('note-zoom-textarea').value || '';
  
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = \`Notas_\${titleText}.txt\`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/* Helper functions for counters */`
);

html = html.replaceAll(
  `<div id="app-version-badge" style="position:fixed; bottom:5px; right:5px; font-size:10px; color:rgba(0,0,0,0.3); z-index:9999; pointer-events:none;">V7</div>`,
  `<div id="app-version-badge" style="position:fixed; bottom:5px; right:5px; font-size:10px; color:rgba(0,0,0,0.3); z-index:9999; pointer-events:none;">V8</div>`
);

fs.writeFileSync('index.html', html);
console.log('Fixed index.html!');
