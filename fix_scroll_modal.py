import re

path = '/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/Antigravity/LaboresSinConex/index.html'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

old_open_modal = """function openModal(id) {
  restoreAppScrolling();
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.add('open');
  const modalBody = overlay.querySelector('.modal-body');
  if (modalBody) modalBody.scrollTop = 0;
  const modalContent = overlay.querySelector('.modal-content');
  if (modalContent) modalContent.scrollTop = 0;
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
  // Fallback genérico para cualquier contenedor interno con scroll
  const scrollableDivs = overlay.querySelectorAll('div[style*="overflow-y: auto"], div[style*="overflow-y:auto"]');
  scrollableDivs.forEach(div => div.scrollTop = 0);
}"""

if old_open_modal in content:
    content = content.replace(old_open_modal, new_open_modal)
    print("Fixed openModal")
else:
    print("Could not find openModal")

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

