## 📁 ディレクトリ構成（概要）

```
.
├── public/                   # ブラウザが直接参照する静的ファイル（faviconなど）
│   └── favicon.ico
├── src/                      # 開発対象のソースコード（EJS/スタイル/React/データ）
│   ├── assets/               # Reactでimportされる画像などの静的リソース（ビルド時にハッシュ付き出力）
│   ├── data/                 # スキルや資格などのJSONデータ
│   ├── styles/               # CSS（EJSでもReactでも利用可）
│   ├── templates/            # EJSテンプレート（HTML構造）
│   │   ├── components/       # 再利用可能なHTMLコンポーネント
│   │   └── profile-page.ejs  # ページ本体のテンプレート
│   └── react/                # ReactによるUIコンポーネント（段階的に導入中）
├── scripts/                  # EJSビルド用のNode.jsスクリプト
│   └── build.js
├── dist/                     # Viteによる最終ビルド成果物（ハッシュ付き・デプロイ用）
├── index.html                # EJSビルドで生成されたHTML（編集不要）
├── package.json
└── vite.config.js            # Vite設定（デフォルトベース）
```

## ⚙️ 開発環境の特徴

- `scripts/build.js` により JSON データを EJS に流し込んで静的 HTML を生成
- 一部コンポーネント（例：プロフィール画像）を React により動的にレンダリング
- Vite による開発サーバー＆本番ビルド最適化（画像や JS はハッシュ付き）
- `nodemon` によって EJS・CSS・JSON の変更を検知して再ビルド

## 🧱 使用パッケージ（devDependencies）

- `ejs`: テンプレートエンジン（静的 HTML 生成）
- `vite`: 高速ビルドツール
- `react`: react-dom: 最小限の React 導入（部分的に使用）
- `nodemon`: ファイル変更監視と自動ビルド
- `fs/promises`: JSON の読み込みに使用（Node.js 標準）

## 🧩 スクリプトの役割

| スクリプト             | 概要                                                           |
| ---------------------- | -------------------------------------------------------------- |
| `scripts/build.js`     | EJS + JSON で `index.html` を生成                              |
| `src/react/mount*.jsx` | React コンポーネントのマウント処理（例：プロフィール画像表示） |
| `src/react/*.jsx`      | React による UI パーツ（画像などを `import` で扱う）           |

## 🧾 JSON によるデータ管理

- `src/data/*.json` に、資格やスキルデータを定義
- `scripts/build.js` が読み込み → `profile-page.ejs`に流し込み
- 構造を保ったまま内容の更新・多言語対応などが可能

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
- React コンポーネントも動的にレンダリング

### 本番用ビルド

```bash
npm run build
```

- EJS + JSON によって`index.html`を生成
- さらに Vite によって、画像やスタイル、JSを含む最終生活物を`dist/に出力。

## 📜 npm scripts 一覧

| コマンド        | 説明                                                                                       |
| --------------- | ------------------------------------------------------------------------------------------ |
| `npm run watch` | `src/` 配下の `.ejs`/`.css`/`.json` を監視し自動ビルド + サーバー起動 |
| `npm run build` | 静的 HTML 生成 + Viteによる最終ビルド                     |
| `npm run dev`   | `watch` 内部で使用：Vite + ビルドスクリプトの連携起動                                         |

## 🏗️ public と dist の違い

| ディレクトリ | 目的                                                |
| ------------ | --------------------------------------------------- |
| `public/`    | faviconなどブラウザが直接参照するファイルのみ     |
| `dist/`      | 本番用ビルド成果物（画像やCSSはハッシュ付き、最適化済） |

## 💡 拡張ポイント

- JSON を用いたデータ分離により、保守性・多言語対応・柔軟なテンプレート変更が容易
- 画像やUIをReactコンポーネントとして段階的に移行可能（現在一部導入済み）
- src/assets/ の画像は import されると Vite により自動で dist/assets/ にハッシュ付き出力される
- TailwindCSS や Sass の導入、PWA対応も容易
- EJS → React の完全移行も自然に進められる構成

## 🌍 デプロイ

Vercel にて公開中：
🔗 https://kodera-kanare.vercel.app
