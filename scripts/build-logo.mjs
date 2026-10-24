// Builds the logo variants and favicon set from the supplied tooth mark
// (assets-source/brand/everwell-logo-original.png). The original is never modified.
//   public/brand/logo-light.png  original colors on transparent (light theme)
//   public/brand/logo-dark.png   same shapes recolored for the dark theme
//   public/favicon-*.png, favicon.ico, apple-touch-icon.png
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const src = path.join(root, "assets-source/brand/everwell-logo-original.png");
const out = (f) => path.join(root, "public", f);
fs.mkdirSync(out("brand"), { recursive: true });

const FG = {
  dark: { rgb: [48, 80, 80], lum: 0.2126 * 48 + 0.7152 * 80 + 0.0722 * 80 },
  grey: { rgb: [136, 160, 168], lum: 0.2126 * 136 + 0.7152 * 160 + 0.0722 * 168 },
};
const BG_LUM = 248;
const DARK_THEME = { dark: [232, 242, 242], grey: [142, 197, 196] };

const { data, info } = await sharp(src)
  .flatten({ background: "#f8f8f8" })
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

function render(palette) {
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const r = data[i * channels],
      g = data[i * channels + 1],
      b = data[i * channels + 2];
    const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const midpoint = (FG.dark.lum + FG.grey.lum) / 2;
    const kind = lum < midpoint ? "dark" : "grey";
    const alpha = Math.max(0, Math.min(1, (BG_LUM - lum) / (BG_LUM - FG[kind].lum)));
    const rgb = palette[kind];
    rgba[i * 4] = rgb[0];
    rgba[i * 4 + 1] = rgb[1];
    rgba[i * 4 + 2] = rgb[2];
    rgba[i * 4 + 3] = alpha < 0.04 ? 0 : Math.round(alpha * 255);
  }
  return sharp(rgba, { raw: { width, height, channels: 4 } });
}

const light = await render({ dark: FG.dark.rgb, grey: FG.grey.rgb }).png().toBuffer();
// Same crop for both variants so they line up exactly.
const crop = await sharp(light).trim({ threshold: 1 }).toBuffer({ resolveWithObject: true });
const box = { top: -(crop.info.trimOffsetTop ?? 0), left: -(crop.info.trimOffsetLeft ?? 0) };
const region = { left: box.left, top: box.top, width: crop.info.width, height: crop.info.height };
const pad = 8;
const finish = (img) =>
  img
    .extract(region)
    .extend({
      top: pad,
      bottom: pad,
      left: pad,
      right: pad,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png({ compressionLevel: 9 });
await finish(sharp(light)).toFile(out("brand/logo-light.png"));
await finish(render(DARK_THEME)).toFile(out("brand/logo-dark.png"));
const logoMeta = await sharp(out("brand/logo-light.png")).metadata();

// Favicons: the tooth sits on a porcelain tile so it stays visible on light and dark browser chrome.
const toothOnTile = async (size, radiusRatio) => {
  const inner = Math.round(size * 0.66);
  const tooth = await sharp(out("brand/logo-light.png"))
    .resize({ width: inner, height: inner, fit: "inside" })
    .toBuffer();
  const tile = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="${Math.round(size * radiusRatio)}" fill="#F4F7F7"/></svg>`,
  );
  return sharp(tile)
    .composite([{ input: tooth, gravity: "centre" }])
    .png()
    .toBuffer();
};
for (const size of [32, 192, 512])
  fs.writeFileSync(out(`favicon-${size}.png`), await toothOnTile(size, 0.2));
fs.writeFileSync(
  out("apple-touch-icon.png"),
  await sharp(await toothOnTile(180, 0))
    .png()
    .toBuffer(),
);

// favicon.ico: a single 32x32 PNG wrapped in an ICO container.
const png32 = fs.readFileSync(out("favicon-32.png"));
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6);
header.writeUInt8(32, 7);
header.writeUInt8(0, 8);
header.writeUInt8(0, 9);
header.writeUInt16LE(1, 10);
header.writeUInt16LE(32, 12);
header.writeUInt32LE(png32.length, 14);
header.writeUInt32LE(22, 18);
fs.writeFileSync(out("favicon.ico"), Buffer.concat([header, png32]));
console.log("logo", logoMeta.width, "x", logoMeta.height);
