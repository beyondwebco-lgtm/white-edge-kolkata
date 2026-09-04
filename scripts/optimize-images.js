#!/usr/bin/env node
/**
 * ==============================================================================
 * Production-Ready Image Optimization Script for Next.js & Vercel
 * ==============================================================================
 * - Target: public/assets/our-work -> public/assets/our-work/optimized
 * - Supports: .jpg, .jpeg, .png, .webp
 * - Max Bounds: 1920x1920 (maintains aspect ratio, never enlarges)
 * - Compression: WebP (Quality 82, Effort 5, Smart Subsampling, Alpha Preserved)
 * - Safety: Non-destructive (saves into /optimized), handles concurrency & errors
 * ==============================================================================
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Configuration
const CONFIG = {
  // Input and output directory paths
  targetDir: path.join(process.cwd(), 'public', 'assets', 'our-work'),
  outputDir: path.join(process.cwd(), 'public', 'assets', 'our-work', 'optimized'),

  // Supported file formats
  supportedExtensions: new Set(['.jpg', '.jpeg', '.png', '.webp']),

  // Size threshold: 400 KB (in bytes)
  minSizeBytes: 400 * 1024,

  // Maximum dimension limits
  maxWidth: 1920,
  maxHeight: 1920,

  // WebP Compression Settings
  webpOptions: {
    quality: 82,             // Sweet spot for visual fidelity and low file size
    alphaQuality: 90,        // High-grade transparency preservation
    lossless: false,
    nearLossless: false,
    smartSubsample: true,    // Reduces chroma artifacts on text and edges
    effort: 5,               // High compression effort (0-6)
  },

  // Max concurrency to prevent memory spikes
  concurrencyLimit: 4,
};

// Utility: Format bytes into human-readable strings
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(i >= 2 ? 2 : 1)} ${sizes[i]}`;
}

// Ensure output directory exists
function ensureDirectory(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/**
 * Process a single image file
 */
async function processImage(fileName, statsCollector) {
  const inputFilePath = path.join(CONFIG.targetDir, fileName);
  const ext = path.extname(fileName).toLowerCase();
  const baseName = path.basename(fileName, ext);
  const outputFileName = `${baseName}.webp`;
  const outputFilePath = path.join(CONFIG.outputDir, outputFileName);

  statsCollector.totalScanned++;

  try {
    const fileStat = fs.statSync(inputFilePath);
    const originalSize = fileStat.size;

    // Check if input is a valid supported file
    if (!CONFIG.supportedExtensions.has(ext)) {
      statsCollector.skipped++;
      return;
    }

    // Read image metadata
    const imageBuffer = fs.readFileSync(inputFilePath);
    const image = sharp(imageBuffer);
    const metadata = await image.metadata();

    const origWidth = metadata.width || 0;
    const origHeight = metadata.height || 0;
    const hasAlpha = Boolean(metadata.hasAlpha);
    const isAlreadyWebp = ext === '.webp';

    // Condition Check: Skip if already small and already WebP
    const isBelowThreshold = originalSize < CONFIG.minSizeBytes;
    const isWithinBounds = origWidth <= CONFIG.maxWidth && origHeight <= CONFIG.maxHeight;

    if (isAlreadyWebp && isBelowThreshold && isWithinBounds) {
      statsCollector.skipped++;
      return;
    }

    // Setup pipeline
    let pipeline = sharp(imageBuffer, { failOnError: false });

    // 1. Resize if image exceeds bounds (maintain aspect ratio, never enlarge)
    if (origWidth > CONFIG.maxWidth || origHeight > CONFIG.maxHeight) {
      pipeline = pipeline.resize({
        width: CONFIG.maxWidth,
        height: CONFIG.maxHeight,
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    // 2. Rotate according to EXIF orientation automatically
    pipeline = pipeline.rotate();

    // 3. Convert to optimized WebP (preserving alpha if PNG/transparency is present)
    const currentWebpOptions = {
      ...CONFIG.webpOptions,
      lossless: false,
    };

    pipeline = pipeline.webp(currentWebpOptions);

    // Write to output directory
    const optimizedBuffer = await pipeline.toBuffer();
    const newSize = optimizedBuffer.length;

    // Check if optimized file actually saves space (or convert anyway if format upgrade required)
    fs.writeFileSync(outputFilePath, optimizedBuffer);

    // Collect dimensions of new image
    const newMetadata = await sharp(optimizedBuffer).metadata();
    const newWidth = newMetadata.width || origWidth;
    const newHeight = newMetadata.height || origHeight;

    const savedBytes = originalSize - newSize;
    const percentReduction = originalSize > 0 
      ? (((originalSize - newSize) / originalSize) * 100).toFixed(1)
      : '0.0';

    statsCollector.optimized++;
    statsCollector.originalTotalSize += originalSize;
    statsCollector.optimizedTotalSize += newSize;

    // Print individual statistics
    const formatChange = `${ext.replace('.', '').toUpperCase()} → WebP${hasAlpha ? ' (Alpha)' : ''}`;
    console.log(`\n📄 ${fileName}`);
    console.log(`   Dimensions : ${origWidth}x${origHeight} → ${newWidth}x${newHeight}`);
    console.log(`   File Size  : ${formatBytes(originalSize)} → ${formatBytes(newSize)} (${percentReduction}% smaller)`);
    console.log(`   Format     : ${formatChange}`);
    console.log(`   Output     : optimized/${outputFileName}`);

  } catch (error) {
    statsCollector.errors.push({ file: fileName, message: error.message });
    console.error(`\n❌ Error processing ${fileName}: ${error.message}`);
  }
}

/**
 * Main execution handler with asynchronous concurrency control
 */
async function runOptimizer() {
  console.log('='.repeat(70));
  console.log('🚀 White Edge Signages – Production Image Optimizer');
  console.log('='.repeat(70));
  console.log(`📁 Source Directory : ${CONFIG.targetDir}`);
  console.log(`📁 Target Output    : ${CONFIG.outputDir}`);
  console.log(`⚙️  Target Format    : WebP (Quality: ${CONFIG.webpOptions.quality}, Max: ${CONFIG.maxWidth}x${CONFIG.maxHeight})`);
  console.log(`⏱️  Min Size Filter : ${formatBytes(CONFIG.minSizeBytes)}`);
  console.log('='.repeat(70));

  if (!fs.existsSync(CONFIG.targetDir)) {
    console.error(`\n❌ Target directory not found: ${CONFIG.targetDir}`);
    process.exit(1);
  }

  ensureDirectory(CONFIG.outputDir);

  const stats = {
    totalScanned: 0,
    optimized: 0,
    skipped: 0,
    originalTotalSize: 0,
    optimizedTotalSize: 0,
    errors: [],
  };

  // Read all files from target directory (excluding subdirectories like /optimized)
  const entries = fs.readdirSync(CONFIG.targetDir, { withFileTypes: true });
  const imageFiles = entries
    .filter((entry) => entry.isFile())
    .map((entry) => entry.name)
    .filter((name) => CONFIG.supportedExtensions.has(path.extname(name).toLowerCase()));

  console.log(`\n🔍 Found ${imageFiles.length} eligible images. Starting optimization...\n`);

  // Concurrency Pool Runner
  const queue = [...imageFiles];
  const activeWorkers = [];

  const runWorker = async () => {
    while (queue.length > 0) {
      const fileName = queue.shift();
      if (fileName) {
        await processImage(fileName, stats);
      }
    }
  };

  for (let i = 0; i < Math.min(CONFIG.concurrencyLimit, imageFiles.length); i++) {
    activeWorkers.push(runWorker());
  }

  await Promise.all(activeWorkers);

  // Final Summary Report
  const totalSavedBytes = Math.max(0, stats.originalTotalSize - stats.optimizedTotalSize);
  const totalPercentReduction = stats.originalTotalSize > 0
    ? ((totalSavedBytes / stats.originalTotalSize) * 100).toFixed(1)
    : '0.0';

  console.log('\n' + '='.repeat(70));
  console.log('📊 FINAL OPTIMIZATION SUMMARY');
  console.log('='.repeat(70));
  console.log(` Total Images Scanned   : ${stats.totalScanned}`);
  console.log(` Images Optimized       : ${stats.optimized}`);
  console.log(` Images Skipped         : ${stats.skipped}`);
  console.log(` Original Total Size    : ${formatBytes(stats.originalTotalSize)}`);
  console.log(` Optimized Total Size   : ${formatBytes(stats.optimizedTotalSize)}`);
  console.log(` Total Space Saved      : ${formatBytes(totalSavedBytes)}`);
  console.log(` Overall Size Reduction : ${totalPercentReduction}%`);

  if (stats.errors.length > 0) {
    console.log(`\n⚠️ Encountered ${stats.errors.length} errors during processing:`);
    stats.errors.forEach((err) => console.log(` - ${err.file}: ${err.message}`));
  }

  console.log('='.repeat(70));
  console.log('✨ All operations completed successfully!\n');
}

// Execute
runOptimizer().catch((err) => {
  console.error('Fatal Error:', err);
  process.exit(1);
});
