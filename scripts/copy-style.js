import { copyFile, mkdir, access } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// 正確なパスの取得方法
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 💡 scripts/copy-style.js から「相対で上に戻る」確実なプロジェクトルート
const projectRoot = path.resolve(__dirname, ".."); // ← path0/

const src = path.join(projectRoot, "src/styles/style.css");
const destDir = path.join(projectRoot, "public/styles");
const dest = path.join(destDir, "style.css");

try {
  console.log("📁 Trying to copy from:", src);
  await access(src);
  await mkdir(destDir, { recursive: true });
  await copyFile(src, dest);
  console.log("✅ CSSをpublicにコピーしました");
} catch (err) {
  console.warn("⚠️ CSSコピー失敗:", err.message);
  process.exit(0); // ❗ ビルドを止めない
}
