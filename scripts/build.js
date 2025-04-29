// scripts/build.js
import { readFile, writeFile } from "fs/promises";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";

// __dirname 相当（ESM環境用）
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// パスの設定
const templatePath = path.resolve(
  __dirname,
  "../src/templates/profile-page.ejs"
);
const outputPath = path.resolve(__dirname, "../public/index.html");

try {
  const html = await ejs.renderFile(
    templatePath,
    {}, // 必要があればここに EJS に渡すデータを記述
    {
      root: path.resolve(__dirname, "../src/templates/components"),
      async: true,
    }
  );

  await writeFile(outputPath, html, "utf8");
  console.log("✅ public/index.html を生成しました");
} catch (err) {
  console.error("❌ EJSのビルドに失敗しました:", err);
}
