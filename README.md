# Canale's portfolio-site

![CI](https://github.com/Canale0107/portfolio-site/actions/workflows/ci.yml/badge.svg)
![Vercel](https://vercelbadge.vercel.app/api/Canale0107/portfolio-site)

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
│   │   └── Interests/       # 趣味・関心・名言など
│   ├── constants/           # 定数の定義（セクションID・ナビゲーションリンクなど）
│   │   └── navigation.js    # ナビゲーション項目とセクションIDを一元管理
│   ├── contexts/            # グローバル状態管理用の Context
│   │   ├── ThemeContext.jsx # テーマ状態の共有（ダーク/ライトモード切替）
│   │   └── SectionContext.jsx # セクション切り替え状態の管理
│   ├── data/                # スキル・資格・名言など構造化データ（JSON）
│   ├── hooks/               # カスタムフック
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
- **構造化データ（JSON）**：経歴・資格・スキル・名言などを `data/` にて管理し、import 経由で動的に表示
- **テーマ切替（Context API）**：`ThemeContext` を使ってテーマ状態をグローバルに管理。ダーク/ライトの切替を全体で共有。
- **画像最適化**：`<picture>` タグで WebP/JPG を切り替え表示
- **モジュール構成**：セクション単位のディレクトリと CSS を分離
- **エイリアス `@/`**：`vite.config.js` により `src/` を簡潔に参照可能に（例：`@/assets/profile-pic.jpg`）
- **セクション切り替え（Context API）**：`SectionContext` を使ってセクション状態をグローバルに管理。ナビゲーションクリック時にセクションを切り替え、URL ハッシュも更新。ブラウザの戻る/進むボタンにも対応。

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

### デプロイ

- このリポジトリは Vercel と連携しており、`main` ブランチに `git push` すると自動でデプロイされます
- デプロイが完了すると、公開サイト（https://kanare.dev）に変更が反映されます

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
  - 状態管理には React Context API（`ThemeContext`）を用いており、アプリ全体から `useTheme()` フックで現在のテーマ状態と切替関数にアクセス可能。
  - テーマの値は `localStorage` に保存され、ブラウザ再読み込み後も状態が保持される。

### セクション切り替え機能

- `SectionContext` により、現在表示中のセクション（`activeSection`）をグローバルに管理。
- ナビゲーションボタンをクリックすると、`changeSection()` が呼び出され、対応するセクションが表示される。
- セクション切り替え時に URL ハッシュ（例：`#career-timeline`）が `history.replaceState()` により更新される。
- ブラウザの戻る/進むボタンで URL ハッシュが変更された場合、`hashchange` イベントを監視してセクションを自動切り替え。
- TOP セクション内のサブセクション（`purpose`, `values`, `about-me`）は全て "top" セクションとして扱われる。

### 📝 資格データ・バッジデータの更新方法

新しい資格を追加する場合は、[`src/data/certifications.json`](https://github.com/Canale0107/portfolio-site/blob/main/src/data/certifications.json) を編集します。

1. **既存のカテゴリに追加する場合**：

   - 該当カテゴリの `items` 配列に新しいオブジェクトを追加
   - 形式：`{ "name": "資格名", "date": "YYYY.MM" }`
   - 日付は取得年月を `YYYY.MM` 形式で記入（例：`"2024.07"`）

2. **新しいカテゴリを追加する場合**：

   - ファイル末尾（最後の `]` の前）に新しいオブジェクトを追加
   - 形式：
     ```json
     {
       "category": "カテゴリ名",
       "items": [{ "name": "資格名", "date": "YYYY.MM" }]
     }
     ```

3. **例**（既存カテゴリに追加）：

   ```json
   {
     "category": "AWS",
     "items": [
       { "name": "CLF-C02", "date": "2025.09" },
       { "name": "SAA-C03", "date": "2025.11" },
       { "name": "新規資格", "date": "2025.11" } // ← 追加
     ]
   }
   ```

4. **注意事項**：
   - JSON の構文エラーに注意（カンマの位置、引用符など）
   - 日付は新しい順に並べることを推奨（表示順は実装によって異なる場合あり）
   - 変更後、開発サーバーが自動でリロードされ、変更が反映されます

新しいバッジを追加する場合は、[`src/data/badges.json`](https://github.com/Canale0107/portfolio-site/blob/main/src/data/badges.json) を編集します。

1. **バッジを追加する場合**：

   - ファイル末尾（最後の `]` の前）に新しいオブジェクトを追加
   - 形式：`{ "url": "バッジの共有URL", "note": "バッジの説明（任意）" }`
   - `url` は **OpenBadge v2** の共有 URL を指定してください（例：`https://www.openbadge-global.com/api/v1.0/openBadge/v2/Wallet/Public/GetAssertionShare/...`）
   - OpenBadge v2 の URL であることを確認してください（URL に `/v2/` が含まれている必要があります）
   - `note` はバッジの説明やメモ（フォールバック表示用、任意）

2. **例**：

   ```json
   [
     {
       "url": "https://www.openbadge-global.com/api/v1.0/openBadge/v2/Wallet/Public/GetAssertionShare/既存のID",
       "note": "既存のバッジ"
     },
     {
       "url": "https://www.openbadge-global.com/api/v1.0/openBadge/v2/Wallet/Public/GetAssertionShare/新しいID",
       "note": "新規バッジ" // ← 追加
     }
   ]
   ```

3. **注意事項**：
   - JSON の構文エラーに注意（カンマの位置、引用符など）
   - `url` は **OpenBadge v2** の正しい共有 URL である必要があります（URL に `/v2/` が含まれていることを確認してください）
   - バッジ情報（名前、画像、発行日など）は URL から自動的に取得されます
   - `note` は表示されませんが、データ管理の参考として記入することができます
   - 変更後、開発サーバーが自動でリロードされ、変更が反映されます

## 公開サイト

🔗 https://kanare.dev
