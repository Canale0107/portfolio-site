# Canale's portfolio-site

## 📁 ディレクトリ構成（概要）

```
.
├── public/                  # ブラウザが直接参照する静的ファイル（favicon など）
│   └── favicons/            # 各種アイコン
├── src/                     # 開発用ソースコード
│   ├── assets/              # 画像などの静的アセット（import で利用されビルド時にハッシュ付き出力）
│   ├── components/          # 各セクションごとの React コンポーネント
│   │   ├── profile/         # プロフィール（写真・名前・基本情報）
│   │   ├── overview/        # パーパス・価値観・自己紹介など
│   │   ├── career/          # 経歴タイムライン
│   │   ├── skills/          # スキル・資格
│   │   ├── research/        # 研究・開発経験
│   │   └── interest/        # 趣味・関心・名言など
│   ├── data/                # スキル・資格・名言データ（JSON）
│   ├── styles/              # CSS（Vite でインポートされる）
│   ├── App.jsx              # 全体のレイアウトとページ構成
│   └── main.jsx             # Vite によるエントリーポイント
├── index.html               # React アプリの HTML エントリーポイント
├── dist/                    # Vite による本番ビルド成果物
├── package.json             # npm パッケージ定義
└── vite.config.js           # Vite の設定（エイリアスなど）
```

## ⚙️ 技術スタックと構成

- React：UI 構築（すべてのセクションをコンポーネントで構成）
- Vite：高速開発・ビルドツール
- CSS（手書き）：スタイルは src/styles/style.css に集中
- JSON + import：経歴、研究成果、スキル・資格、好きな言葉などを構造化して管理
- 画像最適化：WebP / JPG 併用で picture タグにより高効率表示
- ファイル構造のモジュール化：セクション単位にディレクトリ分割
- @ エイリアス：src/ を簡潔に参照可能に（例：@/assets/xxx.jpg）

## 🚀 セットアップ

### 依存関係のインストール

```bash
npm install
```

### 開発サーバーの起動

```bash
npm run dev
```

- `localhost:5173` にて確認可能
- `main.jsx` により `App.jsx` が `#root` にマウントされる

### 本ビルド

```bash
npm run build
```

- `dist/` 以下にハッシュ付きファイルが出力される
- デプロイ先（Vercel）にアップロード可能

## 🧾 使用パッケージ

| パッケージ             | 用途                                 |
| ---------------------- | ------------------------------------ |
| `react`                | UI 開発                              |
| `vite`                 | 開発・ビルド                         |
| `@vitejs/plugin-react` | Vite で React を使うためのプラグイン |

## 補足

- `index.html` はプロジェクト直下にあり、Vite の HTML エントリーポイントとして利用される。
- `style.css` は `main.jsx` からインポートされることでグローバルに適用。
- `index.html` は Vite によって処理される HTML テンプレートであり、React アプリのマウント先を定義している。
  - `<div id="root"></div>` が配置されており、`main.jsx` から `App.jsx` がこの要素にマウントされる。
  - 通常の HTML 開発と異なり、Vite によりビルド時に必要なスクリプトが自動で挿入されるため、`<script>` タグを自分で書く必要はない。
  - HTML の見た目や構造はほとんどこのファイルでは定義せず、実質的に「React のエントリーポイント」としての役割に限定されている。
  - `index.html` は `public/` ではなくプロジェクト直下に置くのが Vite の公式推奨スタイルです。
    > index.html is a part of your source code and is processed by Vite. \
    > It should be placed in the project root, not under public/.\
    > — [Vite Docs: index.html and Public Directory](https://vite.dev/guide/#index-html-and-project-root)

## 🌍 公開サイト

🔗 https://kodera-kanare.vercel.app
