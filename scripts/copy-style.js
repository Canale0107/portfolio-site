import { copyFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// プロジェクトルートを起点にする
const projectRoot = path.resolve(__dirname, "..");

const src = path.join(projectRoot, "../src/styles/style.css");
const dest = path.join(projectRoot, "../public/styles/style.css");

await copyFile(src, dest);
console.log("✅ CSSをpublicにコピーしました");
