import sharp from "sharp";
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";

const inputRoot = "originals";
const outputRoot = "public";
const defaultWidth = 1600;
const widths = { profile: 1000 }; // the profile photo only needs to be 1000px wide
const allowed = [".jpg", ".jpeg", ".png", ".tif", ".tiff", ".webp"];

let folders;
try {
  folders = await readdir(inputRoot, { withFileTypes: true });
} catch {
  console.log('No "originals" folder found. Create originals/projects and put your images in it.');
  process.exit(0);
}

let count = 0;

for (const folder of folders.filter((f) => f.isDirectory())) {
  const inputDir = path.join(inputRoot, folder.name);
  const outputDir = path.join(outputRoot, folder.name);
  await mkdir(outputDir, { recursive: true });

  for (const file of await readdir(inputDir)) {
    const extension = path.extname(file).toLowerCase();
    if (!allowed.includes(extension)) continue;

    const name = path
      .basename(file, path.extname(file))
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    const outputFile = path.join(outputDir, name + ".webp");

    const info = await sharp(path.join(inputDir, file))
      .rotate()
      .resize({ width: widths[folder.name] ?? defaultWidth, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(outputFile);

    console.log("OK  " + outputFile + "  (" + Math.round(info.size / 1024) + " KB)");
    count++;
  }
}

console.log("Done: " + count + " image(s) optimized.");