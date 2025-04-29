import { copyFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// __dirname を定義（ESMでは使えないため手動で）
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.join(__dirname, "../src/styles/style.css");
const dest = path.join(__dirname, "../public/styles/style.css");

await copyFile(src, dest);
console.log("✅ CSSをpublicにコピーしました");
