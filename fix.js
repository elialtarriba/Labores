const fs = require('fs');

let html = fs.readFileSync('LaboresV15.html', 'utf8');

// 1. Convert logo_corrected.jpg to base64
const logoBase64 = fs.readFileSync('logo_corrected.jpg').toString('base64');

// 2. Replace the fetch logic for logo with base64 decoded bytes
html = html.replace(
  /const logoRes = await fetch\('logo_corrected\.jpg'\);\s*if \(logoRes\.ok\) \{\s*const logoBytes = await logoRes\.arrayBuffer\(\);\s*const logoImg = await pdfDoc\.embedJpg\(logoBytes\);\s*page\.drawImage\(logoImg, \{ x: margin \+ 10, y: y - 50, width: 60, height: 50 \}\);\s*\}/,
  `const binaryString = window.atob('${logoBase64}');
    const len = binaryString.length;
    const logoBytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      logoBytes[i] = binaryString.charCodeAt(i);
    }
    const logoImg = await pdfDoc.embedJpg(logoBytes);
    page.drawImage(logoImg, { x: margin + 10, y: y - 50, width: 60, height: 50 });`
);

// 3. Remove ensureReportPdfLibrary remote loading and return window.PDFLib directly
const newEnsurePdf = `async function ensureReportPdfLibrary() {
  if (window.PDFLib?.PDFDocument) return window.PDFLib;
  throw new Error('La biblioteca PDF no está disponible.');
}`;
html = html.replace(
  /async function ensureReportPdfLibrary\(\) \{[\s\S]*?return window\.PDFLib;\n\}/,
  newEnsurePdf
);

// 4. Inject PWA tags into <head>
if (!html.includes('manifest.json')) {
  html = html.replace('</head>', `  <link rel="manifest" href="manifest.json">
  <link rel="apple-touch-icon" href="icon.png">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
</head>`);
}

// 5. Inject pdf-lib.min.js and service worker exactly before the FINAL </body> tag using substring (immune to regex $ bugs)
const pdfLibCode = fs.readFileSync('pdf-lib.min.js', 'utf8');
const scriptTag = `
<script>
// pdf-lib.min.js embedded
${pdfLibCode}
</script>
<script>
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').then((reg) => {
      console.log('SW registered!', reg.scope);
    });
  });
}
</script>
`;

const lastBodyIndex = html.lastIndexOf('</body>');
if (lastBodyIndex !== -1) {
  html = html.substring(0, lastBodyIndex) + scriptTag + html.substring(lastBodyIndex);
}

fs.writeFileSync('index.html', html);
console.log('Done fixing index.html!');
