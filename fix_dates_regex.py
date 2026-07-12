import os
import re

file_path = '/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/Antigravity/LaboresSinConex/index.html'
with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

pattern = r'<div class="form-group full" style="font-size: 13px; color: var\(--text-soft\); padding: 8px 12px; background: var\(--cream\); border-radius: 6px; margin-top: 5px; text-align:center; user-select:none;">\s*<strong>Fecha inicio:</strong> \$\{p\.fechaInicio \? p\.fechaInicio\.split\(\'-\'\)\.reverse\(\)\.join\(\'/\'\) : \'-\'\} &nbsp;\|&nbsp; <strong>Fecha fin:</strong> \$\{p\.fechaFin \? p\.fechaFin\.split\(\'-\'\)\.reverse\(\)\.join\(\'/\'\) : \'-\'\}\s*</div>'

replacement = '''<div style="grid-column: 1 / -1; display: flex; justify-content: center; align-items: center; gap: 16px; font-size: 13px; color: var(--text-soft); padding-top: 12px; margin-top: 8px; border-top: 1px solid var(--cream-dark); user-select:none;">
      <span><strong style="color:var(--text-main); font-weight:600;">Inicio:</strong> ${p.fechaInicio ? p.fechaInicio.split('-').reverse().join('/') : '-'}</span>
      <span style="opacity: 0.4;">|</span>
      <span><strong style="color:var(--text-main); font-weight:600;">Fin:</strong> ${p.fechaFin ? p.fechaFin.split('-').reverse().join('/') : '-'}</span>
    </div>'''

if re.search(pattern, content):
    content = re.sub(pattern, replacement, content, count=1)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Dates line fixed successfully")
else:
    print("Pattern not found!")
