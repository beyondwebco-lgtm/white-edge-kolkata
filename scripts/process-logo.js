const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processLogo() {
  const inputPath = path.join(__dirname, '../public/assets/logo.jpeg');
  const metadata = await sharp(inputPath).metadata();
  console.log('Original dimensions:', metadata.width, metadata.height);

  // 1. Trim margins around logo text
  const trimmedBuffer = await sharp(inputPath)
    .trim({
      background: '#f4f4f4',
      threshold: 30
    })
    .toBuffer();

  const trimmedMeta = await sharp(trimmedBuffer).metadata();
  console.log('Trimmed dimensions:', trimmedMeta.width, trimmedMeta.height);

  // Save tight cropped version
  await sharp(trimmedBuffer).toFile(path.join(__dirname, '../public/assets/logo-cropped.png'));

  // 2. Make background transparent (replace light pixels near white/grey with alpha=0)
  const { data, info } = await sharp(trimmedBuffer)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const pixelData = Buffer.from(data);
  const darkPixelData = Buffer.from(data);

  for (let i = 0; i < pixelData.length; i += 4) {
    const r = pixelData[i];
    const g = pixelData[i + 1];
    const b = pixelData[i + 2];

    // Check if pixel is near white/light grey background (r > 200, g > 200, b > 200)
    if (r > 210 && g > 210 && b > 210) {
      pixelData[i + 3] = 0; // Transparent
      darkPixelData[i + 3] = 0; // Transparent
    } else {
      // For dark mode version: if pixel is near black/dark text (r < 80, g < 80, b < 80), change to pure white
      if (r < 80 && g < 80 && b < 80) {
        darkPixelData[i] = 255;
        darkPixelData[i + 1] = 255;
        darkPixelData[i + 2] = 255;
      }
    }
  }

  // Save transparent PNG (original dark text)
  await sharp(pixelData, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
  .png()
  .toFile(path.join(__dirname, '../public/assets/logo-transparent.png'));

  // Save transparent PNG (white text for dark backgrounds)
  await sharp(darkPixelData, {
    raw: { width: info.width, height: info.height, channels: 4 }
  })
  .png()
  .toFile(path.join(__dirname, '../public/assets/logo-dark-mode.png'));

  console.log('Processed logos successfully saved!');
}

processLogo().catch(err => {
  console.error('Error processing logo:', err);
});
