const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, '../.sisyphus/evidence/task-12-web-resume.svg');
const pngPath = path.join(__dirname, '../.sisyphus/evidence/task-12-web-resume.png');

const svgBuffer = fs.readFileSync(svgPath);

sharp(svgBuffer)
  .png()
  .toFile(pngPath)
  .then(() => {
    console.log('✅ Screenshot saved to:', pngPath);
  })
  .catch(err => {
    console.error('Error converting SVG:', err);
    process.exit(1);
  });
