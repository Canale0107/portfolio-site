import { copyFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Vercelでもローカルでも、正しいプロジェクトルートを得る
const projectRoot = process.cwd();

const src = path.join(projectRoot, "../src/styles/style.css");
const dest = path.join(projectRoot, "../public/styles/style.css");

await copyFile(src, dest);
console.log("✅ CSSをpublicにコピーしました");
