# Canale's portfolio-site

## 📁 ディレクトリ構成（概要）

```
.
├── public/                  # ブラウザが直接参照する静的ファイル（favicon など）
│   └── favicons/            # 各種アイコン
├── src/                     # 開発用ソースコード
│   ├── assets/              # 画像などの静的アセット（import で利用されビルド時にハッシュ付き出力）
│   ├── components/          # 各セクションの React コンポーネントと CSS Modules
│   │   ├── Profile/         # プロフィール（写真・名前・基本情報）
│   │   ├── Overview/        # パーパス・価値観・自己紹介など
│   │   ├── Career/          # 経歴タイムライン
│   │   ├── Skills/          # スキル・資格（プログレスバー付き）
│   │   ├── Research/        # 研究・開発経験
│   │   ├── Interests/       # 趣味・関心・名言など
│   │   └── icons/           # 各種 SVG アイコン
│   ├── data/                # スキル・資格・名言など構造化データ（JSON）
│   ├── styles/              # グローバル CSS（変数定義や基本リセット）
│   ├── App.jsx              # 全体レイアウトとセクション構成
│   └── main.jsx             # Vite によるエントリーポイント
├── index.html               # React アプリの HTML エントリーポイント
├── dist/                    # 本番ビルド成果物（Vite により自動生成）
├── package.json             # npm パッケージ定義
└── vite.config.js           # Vite の設定（エイリアスなど）
```

## ⚙️ 技術スタックと構成

- **React**：UI 構築（セクションごとに明確に分割されたコンポーネント設計）
- **Vite**：高速開発＆軽量ビルド
- **CSS Modules**：各コンポーネントにスコープを限定した `.module.css` によるスタイル管理
- **グローバル CSS**：
  - `variables.css`：色・サイズ・スペースなどの CSS 変数を定義
  - `base.css`：リセットや基本タグ（`body`, `h1-h6`, `a` など）スタイル
  - `responsive.css`：共通的なレスポンシブ定義
- **構造化データ（JSON）**：経歴・資格・スキル・名言などを `data/` にて管理し、import 経由で動的に表示
- **画像最適化**：`<picture>` タグで WebP/JPG を切り替え表示
- **モジュール構成**：セクション単位のディレクトリと CSS を分離
- **エイリアス `@/`**：`vite.config.js` により `src/` を簡潔に参照可能に（例：`@/assets/profile-pic.jpg`）

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
- Vercel や Netlify 等にデプロイ可能

## 🧾 使用パッケージ

| パッケージ             | 用途                                             |
| ---------------------- | ------------------------------------------------ |
| `react`                | UI 開発                                          |
| `vite`                 | 開発・ビルド                                     |
| `@vitejs/plugin-react` | Vite で React を使うためのプラグイン             |
| `classnames`           | 複数クラス名の動的結合に使用（CSS Modules 向け） |
| `react-icons`          | アイコンの使用                                   |

## 補足事項

- `index.html` はプロジェクト直下にあり、Vite の HTML エントリーポイントとして利用される。
- `index.html` は Vite によって処理される HTML テンプレートであり、React アプリのマウント先を定義している。
  - `<div id="root"></div>` が配置されており、`main.jsx` から `App.jsx` がこの要素にマウントされる。
  - 通常の HTML 開発と異なり、Vite によりビルド時に必要なスクリプトが自動で挿入されるため、`<script>` タグを自分で書く必要はない。
  - HTML の見た目や構造はほとんどこのファイルでは定義せず、実質的に「React のエントリーポイント」としての役割に限定されている。
  - `index.html` は `public/` ではなくプロジェクト直下に置くのが Vite の公式推奨スタイルです。
    > index.html is a part of your source code and is processed by Vite. \
    > It should be placed in the project root, not under public/.\
    > — [Vite Docs: index.html and Public Directory](https://vite.dev/guide/#index-html-and-project-root)
- CSS Modules では、クラス名の競合を防ぎつつ、コンポーネント単位でスタイルを管理可能。
- 一部スタイル（.marker, .visually-hidden など）はグローバル CSS で定義し、全体で共有。
- ダークモード切り替えには、[data-theme]属性 + CSS 変数を活用。

## 🌍 公開サイト

🔗 https://kodera-kanare.vercel.app
