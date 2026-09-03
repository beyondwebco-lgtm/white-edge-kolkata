const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'public', 'assets', 'our-work');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpeg') && !f.startsWith('work-'));
files.sort();

console.log(`Found ${files.length} images.`);
files.forEach((file, index) => {
  const num = String(index + 1).padStart(2, '0');
  const target = `work-${num}.jpeg`;
  fs.copyFileSync(path.join(dir, file), path.join(dir, target));
  console.log(`Copied ${file} -> ${target}`);
});

console.log('All images mapped to clean web names successfully.');
