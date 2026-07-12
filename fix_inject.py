import re
import base64

path = '/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/Antigravity/LaboresSinConex/index.html'

def get_b64(filepath):
    with open(filepath, 'rb') as f:
        return 'data:image/jpeg;base64,' + base64.b64encode(f.read()).decode('utf-8')

try:
    proj_b64 = get_b64('/tmp/proj.jpg')
    gal_b64 = get_b64('/tmp/gal.jpg')
    yarn_b64 = get_b64('/tmp/yarn.jpg')
    
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Inject into project
    # Original: "fotoUrl":"","fotoKey":""
    # Replaced: "fotoUrl":"proj_b64","fotoKey":""
    content = content.replace(
        '"fotoUrl":"","fotoKey":""',
        f'"fotoUrl":"{proj_b64}","fotoKey":""'
    )
    
    # Original: "galeria":[]
    # Replaced: "galeria":[{"id":"gal1","url":"gal_b64","local":false,"key":"","nombre":"flores.jpg","creadoEn":"2026-07-12"}]
    content = content.replace(
        '"galeria":[]',
        f'"galeria":[{{"id":"mri8e5j9xcx7y33025","url":"{gal_b64}","local":false,"key":"","nombre":"flores.jpg","creadoEn":"2026-07-12T20:13:41.641Z"}}]'
    )
    
    # Inject into yarn
    # Original (after my fix): "fotosUrls":[] in labores_llanas
    # We want to replace it only for the Capri yarn, but we already wiped it to "fotosUrls":[]
    # Let's target the exact yarn JSON part
    yarn_target = '"fotosUrls":[]'
    yarn_replacement = f'"fotosUrls":[{{"url":"{yarn_b64}","portada":true,"local":false,"key":""}}]'
    # Actually, both needle and yarn have "fotosUrls":[], we only want to replace the yarn one.
    # We can use regex to find the labores_llanas section and replace it.
    
    import re
    # Find the labores_llanas entry and replace inside it
    def replacer(m):
        return m.group(0).replace('"fotosUrls":[]', yarn_replacement)
        
    content = re.sub(r"'labores_llanas':\s*\"\[{.*?}\]\"", replacer, content, flags=re.DOTALL)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Injected Base64 images successfully.")
    
except Exception as e:
    print("Error:", e)

