/**
 * Regenerates every derived image from the posters in assets/posters/.
 * Run with: npm run assets
 *
 * Poster photos carry text on top, so each photo is cropped and the leftover
 * text is painted out. When Lucas supplies originals, replace this step by
 * dropping the new files straight into public/images/.
 */
import { mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { trace } from "potrace";
import sharp, { type Region } from "sharp";
import { LOGO_MARK_PATH } from "../src/components/ui/paths.ts";

const root = fileURLToPath(new URL("..", import.meta.url));
const poster = (name: string) => `${root}assets/posters/${name}`;
const out = (path: string) => `${root}${path}`;

const LOGO_POSTER = poster("IMG_7156.jpg");
const SCHEDULE_POSTER = poster("IMG_7156.jpg");
const BELT_POSTER = poster("IMG_7155.jpg");
const TRAINER_POSTER = poster("IMG_7157.jpg");

/** Traces white shapes on black into one SVG path. */
async function tracePoster(file: string, region: Region, scale = 4) {
  const image = await sharp(file)
    .extract(region)
    .greyscale()
    .resize(region.width * scale, region.height * scale, {
      kernel: "lanczos3",
    })
    .blur(1)
    .threshold(128)
    .negate()
    .png()
    .toBuffer();

  const svg = await new Promise<string>((resolve, reject) => {
    trace(
      image,
      { threshold: 128, turdSize: 30, alphaMax: 1, optTolerance: 0.6 },
      (error, result) => (error ? reject(error) : resolve(result)),
    );
  });

  const path = /\sd="([^"]+)"/.exec(svg)?.[1];
  if (!path) throw new Error(`Nothing traced in ${file}`);
  const viewBox = `0 0 ${region.width * scale} ${region.height * scale}`;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" fill="#fff" fill-rule="evenodd"><path d="${path}"/></svg>\n`;
}

async function logoFiles() {
  const logo = (color: string) =>
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 340" fill="${color}"><path d="${LOGO_MARK_PATH}"/></svg>\n`;
  await writeFile(out("public/brand/logo-mark-white.svg"), logo("#fff"));
  await writeFile(out("public/brand/logo-mark-black.svg"), logo("#000"));

  const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512"><rect width="512" height="512" fill="#000"/><path transform="translate(76 106) scale(.9)" fill="#fff" d="${LOGO_MARK_PATH}"/></svg>\n`;
  await writeFile(out("src/app/icon.svg"), icon);
  await sharp(Buffer.from(icon))
    .resize(180)
    .png()
    .toFile(out("src/app/apple-icon.png"));
}

async function classIcons() {
  const icons: Record<string, Region> = {
    kimono: { left: 145, top: 790, width: 205, height: 185 },
    nogi: { left: 545, top: 795, width: 195, height: 175 },
    kids: { left: 925, top: 805, width: 265, height: 170 },
  };
  for (const [name, region] of Object.entries(icons)) {
    const svg = await tracePoster(SCHEDULE_POSTER, region);
    await writeFile(out(`public/icons/${name}.svg`), svg);
  }
}

async function trainerPhoto() {
  const region = { left: 646, top: 0, width: 644, height: 975 };
  // Covers the poster text left of the trainer, following his outline.
  const cover = `<svg xmlns="http://www.w3.org/2000/svg" width="${region.width}" height="${region.height}">
    <filter id="soft" x="-5%" y="-5%" width="110%" height="110%"><feGaussianBlur stdDeviation="1.4"/></filter>
    <g filter="url(#soft)" fill="#050505">
      <polygon points="-30,255 104,255 114,380 86,440 66,490 60,520 48,548 32,575 34,600 31,622 34,650 24,660 24,700 54,725 114,745 124,800 106,850 94,900 90,1000 -30,1000"/>
      <ellipse cx="35" cy="630" rx="6.5" ry="9"/>
    </g>
  </svg>`;

  const cleaned = await sharp(TRAINER_POSTER)
    .extract(region)
    .composite([{ input: Buffer.from(cover) }])
    .png()
    .toBuffer();

  // The blur fades at the canvas edge, so the outer 4 px are dropped.
  return sharp(cleaned)
    .extract({ left: 4, top: 0, width: 640, height: 975 })
    .greyscale()
    .resize(1280, null, { kernel: "lanczos3" })
    .sharpen({ sigma: 0.8 })
    .webp({ quality: 82 })
    .toFile(out("public/images/trainer-hero.webp"));
}

async function beltPhoto() {
  const region = { left: 690, top: 0, width: 600, height: 760 };
  // Covers the "Mais que luta" text beside the belt.
  const cover = `<svg xmlns="http://www.w3.org/2000/svg" width="${region.width}" height="${region.height}">
    <filter id="soft"><feGaussianBlur stdDeviation="6"/></filter>
    <rect filter="url(#soft)" x="385" y="415" width="240" height="370" fill="#000"/>
  </svg>`;

  const cleaned = await sharp(BELT_POSTER)
    .extract(region)
    .composite([{ input: Buffer.from(cover) }])
    .png()
    .toBuffer();

  return sharp(cleaned)
    .greyscale()
    .resize(1200, null, { kernel: "lanczos3" })
    .sharpen({ sigma: 0.8 })
    .webp({ quality: 80 })
    .toFile(out("public/images/black-belt.webp"));
}

async function shareImage() {
  const width = 1200;
  const height = 630;
  const trainer = await sharp(out("public/images/trainer-hero.webp"))
    .resize(560)
    .extract({ left: 0, top: 0, width: 560, height })
    .toBuffer();
  const mark = await sharp(
    Buffer.from(
      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 340" width="270"><path fill="#fff" d="${LOGO_MARK_PATH}"/></svg>`,
    ),
  )
    .png()
    .toBuffer();
  const wordmark = await sharp(
    Buffer.from(
      await tracePoster(LOGO_POSTER, {
        left: 220,
        top: 440,
        width: 850,
        height: 160,
      }),
    ),
  )
    .resize(520)
    .png()
    .toBuffer();

  await sharp({
    create: { width, height, channels: 3, background: "#050505" },
  })
    .composite([
      { input: trainer, left: width - 560, top: 0 },
      { input: mark, left: 90, top: 110 },
      { input: wordmark, left: 90, top: 370 },
    ])
    .jpeg({ quality: 84 })
    .toFile(out("src/app/opengraph-image.jpg"));
}

for (const dir of ["public/brand", "public/icons", "public/images"]) {
  await mkdir(out(dir), { recursive: true });
}
await logoFiles();
await classIcons();
await trainerPhoto();
await beltPhoto();
await shareImage();
console.log("Assets written.");
