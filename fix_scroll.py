import re

path = '/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/Antigravity/LaboresSinConex/index.html'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix openModal
old_open_modal = """function openModal(id) {
  restoreAppScrolling();
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.add('open');
  const modalBody = overlay.querySelector('.modal-body');
  if (modalBody) modalBody.scrollTop = 0;
}"""

new_open_modal = """function openModal(id) {
  restoreAppScrolling();
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.add('open');
  const modalBody = overlay.querySelector('.modal-body');
  if (modalBody) modalBody.scrollTop = 0;
  const modalContent = overlay.querySelector('.modal-content');
  if (modalContent) modalContent.scrollTop = 0;
  // Fallback genérico para cualquier contenedor con overflow dentro del modal
  const scrollableDivs = overlay.querySelectorAll('div[style*="overflow-y: auto"], div[style*="overflow-y:auto"]');
  scrollableDivs.forEach(div => div.scrollTop = 0);
}"""

if old_open_modal in content:
    content = content.replace(old_open_modal, new_open_modal)
    print("Fixed openModal")
else:
    print("Could not find openModal")

# Fix showView
old_show_view_end = """    var s=document.getElementById('theme-select'); if(s) s.value=localStorage.getItem('labores_theme')||'';
  }
}"""

new_show_view_end = """    var s=document.getElementById('theme-select'); if(s) s.value=localStorage.getItem('labores_theme')||'';
  }
  
  if (v === 'detalle') {
    window.scrollTo(0, 0);
    const appContainer = document.querySelector('.app-container');
    if (appContainer) appContainer.scrollTop = 0;
  }
}"""

if old_show_view_end in content:
    content = content.replace(old_show_view_end, new_show_view_end)
    print("Fixed showView")
else:
    print("Could not find showView end")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

