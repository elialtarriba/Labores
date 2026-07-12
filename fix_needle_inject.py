import re
import base64

path = '/Users/elisabeth/Library/Mobile Documents/com~apple~CloudDocs/Antigravity/LaboresSinConex/index.html'

def get_b64(filepath):
    with open(filepath, 'rb') as f:
        return 'data:image/jpeg;base64,' + base64.b64encode(f.read()).decode('utf-8')

try:
    needle_b64 = get_b64('/tmp/needle.jpg')
    
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    needle_replacement = f'"fotosUrls":[{{"url":"{needle_b64}","portada":true,"local":false,"key":""}}]'
    
    def replacer(m):
        return m.group(0).replace('"fotosUrls":[]', needle_replacement)
        
    content = re.sub(r"'labores_agujas':\s*\"\[{.*?}\]\"", replacer, content, flags=re.DOTALL)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
        
    print("Injected needle Base64 successfully.")
    
except Exception as e:
    print("Error:", e)

