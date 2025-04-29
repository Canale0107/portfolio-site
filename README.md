## ディレクトリ構成（概要）

```
.
├── public/              # ビルド後にブラウザが参照する静的ファイルを置く場所
│   └── index.html       # EJS で生成される最終HTML（編集しない）
│   └── styles/          # コピーされたCSSファイル（編集しない）
├── src/                 # 編集対象の元ファイル
│   ├── templates/       # EJSテンプレートを格納
│   │   ├── components/  # 分割されたコンポーネント
│   │   └── profile-page.ejs  # 各コンポーネントを include するメインテンプレート
│   ├── styles/          # 編集対象の CSS
│   └── data/            # スキル等の内容を管理するJSONファイル群
├── scripts/             # HTML/CSSを public に出力するビルドスクリプト
├── dist/                # vite build による本番用成果物
└── vite.config.js       # Vite の設定ファイル（今回はほぼデフォルト）
```

## 開発環境

このプロジェクトは以下の構成で開発されています：

- EJS を使った HTML コンポーネントのテンプレート化
- Node.js スクリプトによるテンプレート組み立てと CSS コピー
- Vite による開発用サーバー & 自動リロード
- `nodemon` によるテンプレート変更時のビルド自動化

## 使用パッケージ（devDependencies）

- `ejs`: テンプレートエンジン（HTML の分割と合成に使用）
- `vite`: 開発用サーバーとビルド（本番用）に使用
- `nodemon`: ファイル変更を監視して自動ビルド
- `fs/promises`: JSON ファイルの読み込みに使用（Node.js 標準）

## スクリプトの役割

- `scripts/build.js`:
  - `profile-page.ejs` をテンプレートとして各コンポーネントを結合し、HTML に展開
  - JSON からデータを読み込んでテンプレートに流し込み
- `scripts/copy-style.js`: CSS を `src/styles/` から `public/styles/` へコピー

## JSON によるデータ管理

- `src/data/*.json` にて、資格・スキルデータを構造化して管理しています。
- `scripts/build.js` でこの JSON を読み込み、EJS テンプレートに流し込んで `public/index.html` を生成します。
- JSON ファイルを編集すれば、EJS テンプレート側をいじらずとも内容が更新できます。
- JSON → EJS → HTML という構成により、保守性と再利用性の高いサイト構成が実現できる

※ 将来的に経歴も同様に JSON から管理する構成に拡張可能です。

## セットアップ

```bash
npm install
```

## 開発用サーバーの起動

```bash
npm run watch
```

- `src/templates/components/*.ejs`を変更すると自動で`public/index.html`が再生成され、ブラウザ（`localhost:5173`）に即時反映されます。
- CSS (src/styles/style.css) の変更も即時反映されます。

## 本番用ビルド

```bash
npm run build
```

- `public/index.html`を生成し、さらに Vite によって`dist/`フォルダに最適化された成果物が出力されます（将来的にデプロイ用）。

## npm scripts

| コマンド        | 説明                                                                                                     |
| --------------- | -------------------------------------------------------------------------------------------------------- |
| `npm run watch` | src/ 配下の `.ejs` / `.css` ファイルを監視し、変更があれば自動で HTML を再生成し、ブラウザに反映します。 |
| `npm run build` | EJS で HTML を組み立て、CSS をコピーし、Vite による本番用ビルドを実行します。                            |
| `npm run dev`   | watch 用の中で使われており、スクリプトを走らせたあと `vite` を起動します。                               |

## public と dist の違い

- `public/`: 開発中に直接使う静的ファイルを置く場所（例: 画像、生成済み HTML、CSS など）
  - HTML/CSS は `scripts/build.js` や `scripts/copy-style.js` により自動生成されます
- `dist/`: `vite build` 時に Vite によって最終成果物が吐き出される場所（ホスティング用）

## 💡 補足：構成の安定性と将来性

- この構成はシンプルながら拡張可能です。
- 将来的に JSON でデータ管理 → EJS に流し込む → 多言語対応や動的なプロフィール生成も可能。
- `gh-pages` や `Netlify`, `Vercel` などでそのままホスティングもできます。

## Tips: カスタマイズ・拡張するなら

- JSON でスキルや資格を管理して EJS に流し込みたい場合は `build.js` を編集
- Tailwind CSS や Sass を導入したくなったら `vite.config.js` に設定を追加
- 公開は GitHub Pages / Vercel / Netlify がおすすめ（dist フォルダ or public/index.html を使う）
