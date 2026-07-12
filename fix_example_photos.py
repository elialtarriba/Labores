import re

path = '/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/Antigravity/LaboresSinConex/index.html'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix labores_proyectos
content = content.replace(
    '"fotoKey":"proyectos_mri5rwe0xln4p12i7p_mri6z9aubj6tcplkvst"',
    '"fotoKey":""'
)
content = content.replace(
    '"galeria":[{"id":"mri8e5j9xcx7y33025","url":"","local":true,"key":"proyectos_mri5rwe0xln4p12i7p_galeria_mri8e5j9s938kb2jk7m","nombre":"resolution.webp","creadoEn":"2026-07-12T20:13:41.641Z"}]',
    '"galeria":[]'
)

# Fix labores_agujas
content = content.replace(
    '"fotosUrls":[{"key":"agujas_mpnzz6dv9ag9a6e8jlj_mq69rhe72rjt0x7de7","url":"","local":true,"portada":true}]',
    '"fotosUrls":[]'
)

# Fix labores_llanas
content = content.replace(
    '"fotosUrls":[{"url":"","portada":true,"local":true,"key":"llanas_mri7i64ubq25m0a7jr_foto_mri7i64u9im4c11900e"}]',
    '"fotosUrls":[]'
)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed factory examples photos")
