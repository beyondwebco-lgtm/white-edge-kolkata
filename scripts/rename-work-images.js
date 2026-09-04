const fs = require('fs');
const path = require('path');

const dir = path.join(process.cwd(), 'public', 'assets', 'our-work');

const imageMapping = [
  { num: '01', name: 'tea-kettle-circular-projecting-lightbox.jpeg' },
  { num: '02', name: 'stainless-steel-halo-lit-3d-letter-s.jpeg' },
  { num: '03', name: 'zycho-warm-backlit-3d-letters.jpeg' },
  { num: '04', name: 'wezbrain-mercy-hospital-commercial-tower-signage.jpeg' },
  { num: '05', name: 'wezbrain-skytex-commercial-building-facade-signage.jpeg' },
  { num: '06', name: 'al-ahzab-dry-fruits-vertical-backlit-lightbox.jpeg' },
  { num: '07', name: 'wezbrain-tuition-acp-3d-board-closeup.jpeg' },
  { num: '08', name: 'scult-boutique-white-acp-fascia-sign.jpeg' },
  { num: '09', name: 'scult-clothing-halo-lit-letters-perspective.jpeg' },
  { num: '10', name: 'al-ahzab-gold-acp-3d-acrylic-letters.jpeg' },
  { num: '11', name: 'damro-furniture-teal-storefront-facade.jpeg' },
  { num: '12', name: 'green-acrylic-mirror-ss-channel-letters.jpeg' },
  { num: '13', name: 'kozhikode-heritage-illuminated-stretch-ceiling-lightbox.jpeg' },
  { num: '14', name: 'japanese-kanji-suspended-cube-lightbox.jpeg' },
  { num: '15', name: 'damro-furniture-storefront-wide-elevation.jpeg' },
  { num: '16', name: 'fashion-store-indoor-backlit-fabric-lightbox.jpeg' },
  { num: '17', name: 'hyp-oriental-street-boutique-storefront-signage.jpeg' },
  { num: '18', name: 'ehan-dry-fruits-green-acp-fascia-signboard.jpeg' },
  { num: '19', name: 'eyelore-opticals-gloss-red-acp-storefront.jpeg' },
  { num: '20', name: 'eyelore-opticals-night-illuminated-led-sign.jpeg' },
  { num: '21', name: 'titanium-gold-mirror-ss-halo-letter-3.jpeg' },
  { num: '22', name: 'cool-land-kuttichira-juice-bar-glow-signboard.jpeg' },
  { num: '23', name: 'japanese-kanji-cube-sign-wide-view.jpeg' },
];

imageMapping.forEach(item => {
  const src = path.join(dir, `work-${item.num}.jpeg`);
  const dest = path.join(dir, item.name);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Copied work-${item.num}.jpeg -> ${item.name}`);
  } else {
    console.error(`Missing source: ${src}`);
  }
});

console.log('All descriptive filenames created successfully!');
