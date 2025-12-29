/**
 * バッジデータを取得して静的JSONファイルを生成するスクリプト
 *
 * 入力: src/data/badge-urls.json（手動で編集するファイル、URLとnoteのみ）
 * 出力: src/data/badges.json（自動生成、完全なバッジデータ）
 *
 * 使い方: node scripts/fetch-badge-data.js
 */

import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// badge-urls.jsonを読み込む（手動で入力するファイル）
const badgeUrlsPath = path.join(__dirname, "../src/data/badge-urls.json");
const badgesData = JSON.parse(await fs.readFile(badgeUrlsPath, "utf-8"));

console.log(`バッジ数: ${badgesData.length}`);

async function fetchBadgeData(badgeUrl, note) {
  console.log(`\n取得中: ${note}`);
  console.log(`URL: ${badgeUrl}`);

  try {
    // URLからアサーションIDを抽出
    const assertionIdMatch = badgeUrl.match(/\/GetAssertionShare\/([^\/]+)/);
    if (!assertionIdMatch) {
      throw new Error("Invalid badge URL format");
    }
    const assertionId = assertionIdMatch[1];

    let badgeInfo = null;
    let issuedOn = null;

    // 1. まず /Assertion/Host/{id} を試行（AWSバッジなど）
    try {
      const hostApiUrl = `https://nlp.netlearning.co.jp/api/v1.0/openbadge/v2/Assertion/Host/${assertionId}`;
      console.log(`  APIリクエスト: ${hostApiUrl}`);
      const hostResponse = await fetch(hostApiUrl);

      if (hostResponse.ok) {
        const hostJsonData = await hostResponse.json();

        if (
          !hostJsonData.errors &&
          (!hostJsonData.status || hostJsonData.status !== 500)
        ) {
          const badgeClassUrl = hostJsonData.badge;
          issuedOn = hostJsonData.issuedOn;
          console.log(`  発行日取得: ${issuedOn}`);

          // バッジクラス情報を取得
          if (badgeClassUrl) {
            try {
              console.log(`  バッジクラス取得: ${badgeClassUrl}`);
              const badgeResponse = await fetch(badgeClassUrl);
              if (badgeResponse.ok) {
                const badgeData = await badgeResponse.json();
                const imageUrl =
                  badgeData.image?.id ||
                  (typeof badgeData.image === "string"
                    ? badgeData.image
                    : null) ||
                  `https://nlp.netlearning.co.jp/api/v1.0/openbadge/v2/Assertion/Host/${assertionId}/Image`;

                // issuer情報を取得
                let issuerName = null;
                if (badgeData.issuer) {
                  if (typeof badgeData.issuer === "string") {
                    // issuerがURLの場合、URLからデータを取得
                    try {
                      const issuerResponse = await fetch(badgeData.issuer);
                      if (issuerResponse.ok) {
                        const issuerData = await issuerResponse.json();
                        issuerName = issuerData.name;
                        console.log(`  発行者取得: ${issuerName}`);
                      }
                    } catch (issuerErr) {
                      console.log(`  ! 発行者取得失敗（CORS制限の可能性）`);
                    }
                  } else if (badgeData.issuer.name) {
                    // issuerがオブジェクトの場合
                    issuerName = badgeData.issuer.name;
                    console.log(`  発行者取得: ${issuerName}`);
                  }
                }

                badgeInfo = {
                  name: badgeData.name || note,
                  description: badgeData.description || "",
                  image: imageUrl,
                  issuedOn: issuedOn,
                  url: badgeUrl,
                  ...(issuerName && { issuer: issuerName }),
                };
                console.log(`  ✓ Host API経由で取得成功`);
              }
            } catch (badgeErr) {
              console.log(`  ! バッジクラス取得失敗（CORS制限の可能性）`);
              // CORSエラーの場合、HTMLから取得を試みる
            }
          }
        }
      }
    } catch (hostErr) {
      console.log(`  ! Host API失敗: ${hostErr.message}`);
    }

    // 2. /Assertion/Host/{id} が失敗した場合のみ /Assertion/{id} を試行
    if (!badgeInfo && !issuedOn) {
      try {
        const altApiUrl = `https://nlp.netlearning.co.jp/api/v1.0/openbadge/v2/Assertion/${assertionId}`;
        console.log(`  代替APIリクエスト: ${altApiUrl}`);
        const altResponse = await fetch(altApiUrl);

        if (altResponse.ok) {
          const altJsonData = await altResponse.json();

          if (
            !altJsonData.errors &&
            (!altJsonData.status || altJsonData.status !== 500)
          ) {
            const badgeClassUrl = altJsonData.badge;
            issuedOn = altJsonData.issuedOn;
            console.log(`  発行日取得: ${issuedOn}`);

            if (badgeClassUrl) {
              const badgeResponse = await fetch(badgeClassUrl);
              if (badgeResponse.ok) {
                const badgeData = await badgeResponse.json();

                // 画像URLを取得（複数のソースから試行）
                let imageUrl = null;
                if (altJsonData.image) {
                  imageUrl =
                    typeof altJsonData.image === "string"
                      ? altJsonData.image
                      : altJsonData.image.id || altJsonData.image;
                } else if (badgeData.image) {
                  imageUrl =
                    typeof badgeData.image === "string"
                      ? badgeData.image
                      : badgeData.image.id || badgeData.image;
                }

                // フォールバック: 両方のパスを試す
                if (!imageUrl) {
                  // まず /Assertion/{id}/image を試す（G検定など）
                  imageUrl = `https://nlp.netlearning.co.jp/api/v1.0/openbadge/v2/Assertion/${assertionId}/image`;
                }

                console.log(`  画像URL: ${imageUrl}`);

                // issuer情報を取得
                let issuerName = null;
                if (badgeData.issuer) {
                  if (typeof badgeData.issuer === "string") {
                    // issuerがURLの場合、URLからデータを取得
                    try {
                      const issuerResponse = await fetch(badgeData.issuer);
                      if (issuerResponse.ok) {
                        const issuerData = await issuerResponse.json();
                        issuerName = issuerData.name;
                        console.log(`  発行者取得: ${issuerName}`);
                      }
                    } catch (issuerErr) {
                      console.log(`  ! 発行者取得失敗（CORS制限の可能性）`);
                    }
                  } else if (badgeData.issuer.name) {
                    // issuerがオブジェクトの場合
                    issuerName = badgeData.issuer.name;
                    console.log(`  発行者取得: ${issuerName}`);
                  }
                }

                badgeInfo = {
                  name: badgeData.name || note,
                  description: badgeData.description || "",
                  image: imageUrl,
                  issuedOn: issuedOn,
                  url: badgeUrl,
                  ...(issuerName && { issuer: issuerName }),
                };
                console.log(`  ✓ 代替API経由で取得成功`);
              }
            }
          }
        }
      } catch (altErr) {
        console.log(`  ! 代替API失敗: ${altErr.message}`);
      }
    }

    // 3. APIから取得できた場合は返す
    if (badgeInfo) {
      return badgeInfo;
    }

    // 4. JSON APIが失敗した場合、HTMLからメタタグを取得
    console.log(`  HTMLから取得試行...`);
    const htmlResponse = await fetch(badgeUrl);
    if (!htmlResponse.ok) {
      throw new Error(`Failed to fetch badge HTML: ${htmlResponse.status}`);
    }

    const html = await htmlResponse.text();

    // 簡易的なメタタグパーサー（DOMParserがNode.jsで使えないため正規表現を使用）
    const getMetaContent = (html, property) => {
      const patterns = [
        new RegExp(`<meta\\s+property="${property}"\\s+content="([^"]*)"`, "i"),
        new RegExp(`<meta\\s+content="([^"]*)"\\s+property="${property}"`, "i"),
        new RegExp(`<meta\\s+name="${property}"\\s+content="([^"]*)"`, "i"),
        new RegExp(`<meta\\s+content="([^"]*)"\\s+name="${property}"`, "i"),
      ];

      for (const pattern of patterns) {
        const match = html.match(pattern);
        if (match) return match[1];
      }
      return null;
    };

    const title =
      getMetaContent(html, "og:title") || getMetaContent(html, "twitter:title");
    const description =
      getMetaContent(html, "og:description") ||
      getMetaContent(html, "twitter:description");

    // 画像URLを取得（メタタグから取得できない場合、両方のパスを試す）
    let imageUrl =
      getMetaContent(html, "og:image") || getMetaContent(html, "twitter:image");
    if (!imageUrl) {
      // フォールバック: まず /Assertion/{id}/image を試す（G検定など）
      imageUrl = `https://nlp.netlearning.co.jp/api/v1.0/openbadge/v2/Assertion/${assertionId}/image`;
    }
    console.log(`  画像URL（HTMLから）: ${imageUrl}`);

    // 発行日を取得（まだ取得できていない場合）
    if (!issuedOn) {
      try {
        const hostApiUrl = `https://nlp.netlearning.co.jp/api/v1.0/openbadge/v2/Assertion/Host/${assertionId}`;
        const hostApiResponse = await fetch(hostApiUrl);
        if (hostApiResponse.ok) {
          const hostApiData = await hostApiResponse.json();
          if (
            !hostApiData.errors &&
            (!hostApiData.status || hostApiData.status !== 500)
          ) {
            issuedOn = hostApiData.issuedOn;
          }
        }
      } catch (e) {
        // 失敗しても続行
      }

      if (!issuedOn) {
        try {
          const altApiUrl = `https://nlp.netlearning.co.jp/api/v1.0/openbadge/v2/Assertion/${assertionId}`;
          const altApiResponse = await fetch(altApiUrl);
          if (altApiResponse.ok) {
            const altApiData = await altApiResponse.json();
            if (
              !altApiData.errors &&
              (!altApiData.status || altApiData.status !== 500)
            ) {
              issuedOn = altApiData.issuedOn;
            }
          }
        } catch (e) {
          // 失敗しても続行
        }
      }
    }

    console.log(`  ✓ HTMLから取得成功`);
    return {
      name: title || note,
      description: description || "",
      image: imageUrl,
      issuedOn: issuedOn,
      url: badgeUrl,
    };
  } catch (err) {
    console.error(`  ✗ エラー: ${err.message}`);

    // フォールバック: 最低限の情報を返す
    const assertionIdMatch = badgeUrl.match(/\/GetAssertionShare\/([^\/]+)/);
    if (assertionIdMatch) {
      const assertionId = assertionIdMatch[1];
      return {
        name: note,
        description: "",
        image: `https://nlp.netlearning.co.jp/api/v1.0/openbadge/v2/Assertion/${assertionId}/Image`,
        issuedOn: null,
        url: badgeUrl,
      };
    }

    throw err;
  }
}

async function main() {
  const results = [];

  for (const badge of badgesData) {
    const data = await fetchBadgeData(badge.url, badge.note);
    results.push(data);

    // API制限を避けるため少し待機
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  // 結果を保存
  const outputPath = path.join(__dirname, "../src/data/badges.json");
  await fs.writeFile(outputPath, JSON.stringify(results, null, 2), "utf-8");

  console.log(
    `\n✓ 完了: ${results.length}件のバッジデータを ${outputPath} に保存しました`
  );
  console.log("\n取得したデータ:");
  results.forEach((badge, i) => {
    console.log(
      `  ${i + 1}. ${badge.name} (${badge.issuedOn || "発行日不明"})`
    );
  });
}

main().catch((err) => {
  console.error("エラーが発生しました:", err);
  process.exit(1);
});
