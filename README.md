## 📁 ディレクトリ構成（概要）

```
.
├── public/              # ブラウザが参照する静的ファイル（HTML/CSS 出力先）
│   ├── index.html       # EJS から生成された最終 HTML（編集しない）
│   └── styles/          # コピーされた CSS（編集しない）
├── src/                 # 編集対象のソース
│   ├── templates/       # EJS テンプレート
│   │   ├── components/  # HTML コンポーネント
│   │   └── profile-page.ejs  # ページ本体テンプレート
│   ├── styles/          # 編集対象の CSS
│   └── data/            # スキルや資格などの JSON データ
├── scripts/             # ビルド用 Node.js スクリプト
├── dist/                # `vite build` による本番用ビルド成果物
└── vite.config.js       # Vite 設定（今回はほぼデフォルト）
```

## ⚙️ 開発環境の特徴

- EJS による HTML コンポーネント構成
- `scripts/build.js` で JSON データを EJS に流し込んで HTML を生成
- Vite による開発サーバー・本番ビルド
- `nodemon` による `.ejs`, `.css`, `.json` の変更監視と自動ビルド

## 🧱 使用パッケージ（devDependencies）

- `ejs`: テンプレートエンジン（HTML の分割と合成に使用）
- `vite`: 高速ビルド・開発サーバー
- `nodemon`: ファイル変更監視と再実行
- `fs/promises`: JSON の読み込みに使用（Node.js 標準）

## 🧩 スクリプトの役割

| スクリプト               | 概要                                           |
| ------------------------ | ---------------------------------------------- |
| `scripts/build.js`       | EJS + JSON で `public/index.html` を生成       |
| `nscripts/copy-style.js` | `src/styles` → `public/styles` に CSS をコピー |

## 🧾 JSON によるデータ管理

- `src/data/*.json` に、資格やスキルデータを定義
- `scripts/build.js` が読み込み → `profile-page.ejs`に流し込み
- JSON を編集すれば、EJS 側の構造を変更せずに内容を更新可能
- 保守性・拡張性・再利用性の高い構成

※ 将来的に経歴も同様に JSON から管理する構成に拡張予定。

## 🚀 セットアップとコマンド

### 初期セットアップ

```bash
npm install
```

### 開発用サーバーの起動

```bash
npm run watch
```

- `.ejs`, `.css`, `.json` の変更を検知して自動再ビルド
- ブラウザの`localhost:5173`に即時反映

### 本番用ビルド

```bash
npm run build
```

- `public/index.html`を生成し、さらに Vite によって`dist/`フォルダに最適化された成果物が出力されます（将来的にデプロイ用）。

## 📜 npm scripts 一覧

| コマンド        | 説明                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------ |
| `npm run watch` | `src/` 配下の `.ejs`/`.css`/`.json` を監視し、変更があれば HTML を再生成してブラウザに反映 |
| `npm run build` | EJS + JSON で HTML を生成し、CSS をコピー、本番用に `vite build`を実行                     |
| `npm run dev`   | `watch` 内部で使用：スクリプト実行後に Vite を起動                                         |

## 🏗️ public と dist の違い

| ディレクトリ | 目的                                                |
| ------------ | --------------------------------------------------- |
| `public/`    | 開発中に参照される静的ファイル（HTML/CSS など）     |
| `dist/`      | 本番ビルドされた成果物（Vercel などにデプロイ可能） |

## 💡 拡張ポイント

- JSON を用いたデータ分離により、保守性・多言語対応・柔軟なテンプレート変更が容易
- Tailwind CSS や Sass の導入も可能（vite.config.js に追記）
- 将来的に React などの UI フレームワークへの移行も視野に設計されており、構造の分離により移行がしやすい

## 🌍 デプロイ候補

- GitHub Pages
- Netlify
- Vercel
