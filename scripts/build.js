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
const certPath = path.resolve(__dirname, "../src/data/certifications.json"); // 資格データ
const skillsJsonPath = path.resolve(__dirname, "../src/data/skills.json"); // スキルデータ

try {
  // 資格データを読み込む
  const certRaw = await readFile(certPath, "utf8");
  const certifications = JSON.parse(certRaw);

  // スキルデータを読み込む
  const skillsRaw = await readFile(skillsJsonPath, "utf8");
  const skills = JSON.parse(skillsRaw); // ← JSONにパース

  // EJS テンプレートをレンダリング
  const html = await ejs.renderFile(
    templatePath,
    { certifications, skills }, // ← ここで EJS に渡す
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
