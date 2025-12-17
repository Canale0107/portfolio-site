import React, { useState, useEffect } from "react";
import styles from "./Skills.module.css";

// グローバルなメモリキャッシュ
const badgeCache = {};

export default function BadgeCard({ url, fallbackName }) {
  const [badgeData, setBadgeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchBadgeData = async () => {
      setLoading(true);
      setError(null);

      // キャッシュがあればすぐ返す
      if (badgeCache[url]) {
        setBadgeData(badgeCache[url]);
        setLoading(false);
        return;
      }

      try {

        // URLからアサーションIDを抽出
        const assertionIdMatch = url.match(/\/GetAssertionShare\/([^\/]+)/);
        if (!assertionIdMatch) {
          throw new Error("Invalid badge URL format");
        }
        const assertionId = assertionIdMatch[1];

        // まずJSON APIを試す（優先順位を明確にする）
        // AWSバッジなどは /Assertion/Host/{id} が正しいパス
        // JDLAバッジなどは /Assertion/{id} が正しいパス
        // 両方を試行するが、/Assertion/Host/{id} を優先

        let badgeDataFromApi = null;
        let issuedOnFromApi = null;

        // 1. まず /Assertion/Host/{id} を試行（AWSバッジなど）
        try {
          const hostApiUrl = `https://nlp.netlearning.co.jp/api/v1.0/openbadge/v2/Assertion/Host/${assertionId}`;
          const hostResponse = await fetch(hostApiUrl);
          if (hostResponse.ok) {
            const hostJsonData = await hostResponse.json();

            // エラーレスポンスの場合スキップ
            if (!hostJsonData.status || hostJsonData.status !== 500) {
              if (!hostJsonData.errors) {
                const badgeClassUrl = hostJsonData.badge;
                issuedOnFromApi = hostJsonData.issuedOn;

                // バッジクラス情報を取得（Credlyの外部APIはCORSエラーになる可能性がある）
                if (badgeClassUrl) {
                  try {
                    const badgeResponse = await fetch(badgeClassUrl);
                    if (badgeResponse.ok) {
                      const badgeData = await badgeResponse.json();
                      badgeDataFromApi = {
                        name: badgeData.name || fallbackName || "バッジ",
                        description: badgeData.description,
                        image:
                          badgeData.image?.id ||
                          (typeof badgeData.image === "string"
                            ? badgeData.image
                            : null) ||
                          `https://nlp.netlearning.co.jp/api/v1.0/openbadge/v2/Assertion/Host/${assertionId}/Image`,
                        issuedOn: issuedOnFromApi,
                      };
                    }
                  } catch (badgeErr) {
                    // Credlyの外部APIがCORSエラーで失敗した場合
                    // issuedOnは取得できているので、HTMLから名前と画像を取得する
                    console.log(
                      "BadgeClass fetch failed (likely CORS), will use HTML fallback:",
                      badgeErr
                    );
                    // badgeDataFromApiはnullのままにして、後でHTMLから取得
                  }
                }

                // 発行日が取得できているが、badgeClassUrlからの取得に失敗した場合
                // HTMLから名前と画像を取得するため、ここでは処理しない
                if (!badgeDataFromApi && issuedOnFromApi) {
                  // issuedOnを保存しておく
                }
              }
            }
          }
        } catch (hostErr) {
          // /Assertion/Host/{id} が失敗した場合は次を試行
          console.log("Host API failed, trying alternative:", hostErr);
        }

        // 2. /Assertion/Host/{id} が失敗し、発行日も取得できていない場合のみ /Assertion/{id} を試行（JDLAバッジなど）
        // issuedOnFromApiが設定されている場合は、/Assertion/Host/{id} が正しいパスなので試行しない
        if (!badgeDataFromApi && !issuedOnFromApi) {
          try {
            const altApiUrl = `https://nlp.netlearning.co.jp/api/v1.0/openbadge/v2/Assertion/${assertionId}`;
            const altResponse = await fetch(altApiUrl);
            if (altResponse.ok) {
              const altJsonData = await altResponse.json();

              // エラーレスポンスの場合スキップ
              if (!altJsonData.status || altJsonData.status !== 500) {
                if (!altJsonData.errors) {
                  const badgeClassUrl = altJsonData.badge;
                  issuedOnFromApi = altJsonData.issuedOn;

                  // バッジクラス情報を取得
                  if (badgeClassUrl) {
                    const badgeResponse = await fetch(badgeClassUrl);
                    if (badgeResponse.ok) {
                      const badgeData = await badgeResponse.json();
                      badgeDataFromApi = {
                        name: badgeData.name || fallbackName || "バッジ",
                        description: badgeData.description,
                        image:
                          altJsonData.image ||
                          badgeData.image ||
                          `https://nlp.netlearning.co.jp/api/v1.0/openbadge/v2/Assertion/${assertionId}/image`,
                        issuedOn: issuedOnFromApi,
                      };
                    }
                  } else if (altJsonData.issuedOn) {
                    // badgeClassUrlがない場合でも発行日がある場合は使用
                    badgeDataFromApi = {
                      name:
                        altJsonData.badge?.name ||
                        altJsonData.name ||
                        fallbackName ||
                        "バッジ",
                      description:
                        altJsonData.badge?.description ||
                        altJsonData.description,
                      image:
                        altJsonData.image ||
                        `https://nlp.netlearning.co.jp/api/v1.0/openbadge/v2/Assertion/${assertionId}/image`,
                      issuedOn: issuedOnFromApi,
                    };
                  }
                }
              }
            }
          } catch (altErr) {
            console.log("Alternative API also failed:", altErr);
          }
        }

        // 3. APIからデータを取得できた場合は使用
        if (badgeDataFromApi) {
          badgeCache[url] = badgeDataFromApi;
          setBadgeData(badgeDataFromApi);
          setLoading(false);
          return;
        }

        // JSON APIが失敗した場合、HTMLからメタタグを取得
        const htmlResponse = await fetch(url);
        if (!htmlResponse.ok) {
          throw new Error(`Failed to fetch badge: ${htmlResponse.status}`);
        }

        const contentType = htmlResponse.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          // JSONレスポンスの場合
          const jsonData = await htmlResponse.json();
          const imageUrl =
            jsonData.badge?.image ||
            `https://nlp.netlearning.co.jp/api/v1.0/openbadge/v2/Assertion/Host/${assertionId}/Image`;

          setBadgeData({
            name: jsonData.badge?.name || fallbackName || "バッジ",
            description: jsonData.badge?.description,
            image: imageUrl,
            issuedOn: jsonData.issuedOn,
          });
        } else {
          // HTMLレスポンスの場合
          const html = await htmlResponse.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");

          const title =
            doc
              .querySelector('meta[property="og:title"]')
              ?.getAttribute("content") ||
            doc
              .querySelector('meta[name="twitter:title"]')
              ?.getAttribute("content");
          const description =
            doc
              .querySelector('meta[property="og:description"]')
              ?.getAttribute("content") ||
            doc
              .querySelector('meta[name="twitter:description"]')
              ?.getAttribute("content");
          const imageUrl =
            doc
              .querySelector('meta[property="og:image"]')
              ?.getAttribute("content") ||
            doc
              .querySelector('meta[name="twitter:image"]')
              ?.getAttribute("content") ||
            `https://nlp.netlearning.co.jp/api/v1.0/openbadge/v2/Assertion/Host/${assertionId}/Image`;

          // 発行日をJSON APIから取得を試行
          // 既に取得済みの場合はそれを使用、なければ新たに取得
          let issuedOn = issuedOnFromApi || null;

          if (!issuedOn) {
            // /Assertion/Host/{id} を優先して試行
            try {
              const hostApiUrl = `https://nlp.netlearning.co.jp/api/v1.0/openbadge/v2/Assertion/Host/${assertionId}`;
              const hostApiResponse = await fetch(hostApiUrl);
              if (hostApiResponse.ok) {
                const hostApiData = await hostApiResponse.json();
                if (!hostApiData.status || hostApiData.status !== 500) {
                  if (!hostApiData.errors) {
                    issuedOn = hostApiData.issuedOn;
                  }
                }
              }
            } catch (e) {
              // 失敗した場合は次のパスを試行
            }

            // /Assertion/Host/{id} が失敗した場合のみ /Assertion/{id} を試行
            if (!issuedOn) {
              try {
                const altApiUrl = `https://nlp.netlearning.co.jp/api/v1.0/openbadge/v2/Assertion/${assertionId}`;
                const altApiResponse = await fetch(altApiUrl);
                if (altApiResponse.ok) {
                  const altApiData = await altApiResponse.json();
                  if (!altApiData.status || altApiData.status !== 500) {
                    if (!altApiData.errors) {
                      issuedOn = altApiData.issuedOn;
                    }
                  }
                }
              } catch (e) {
                // 発行日の取得に失敗しても続行
              }
            }
          }

          setBadgeData({
            name: title || fallbackName || "バッジ",
            description: description,
            image: imageUrl,
            issuedOn: issuedOn,
            assertionId: assertionId,
          });
        }
      } catch (err) {
        console.error("Error fetching badge:", err);
        console.error("URL:", url);
        console.error("Error details:", err);

        // CORSエラーやネットワークエラーの場合は、フォールバックとしてURLから情報を抽出
        const assertionIdMatch = url.match(/\/GetAssertionShare\/([^\/]+)/);
        if (assertionIdMatch) {
          const assertionId = assertionIdMatch[1];
          const fallbackImageUrl = `https://nlp.netlearning.co.jp/api/v1.0/openbadge/v2/Assertion/Host/${assertionId}/Image`;
          const jsonApiUrl = `https://nlp.netlearning.co.jp/api/v1.0/openbadge/v2/Assertion/Host/${assertionId}`;

          // 発行日を取得を試行
          let issuedOn = null;
          try {
            const jsonApiResponse = await fetch(jsonApiUrl);
            if (jsonApiResponse.ok) {
              const jsonApiData = await jsonApiResponse.json();
              issuedOn = jsonApiData.issuedOn;
            }
          } catch (e) {
            // 発行日の取得に失敗しても続行
            console.log("Failed to fetch issuedOn in fallback:", e);
          }

          setBadgeData({
            name: fallbackName || "バッジ",
            image: fallbackImageUrl,
            issuedOn: issuedOn,
            assertionId: assertionId,
          });
          setError(null);
        } else {
          setError(err.message || "バッジの取得に失敗しました");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBadgeData();
  }, [url]);

  // 読み込み中は「読み込み中」と表示する
  if (loading) {
    return (
      <div className={`${styles.badgeCard} ${styles.badgeLoading}`}>
        読み込み中...
      </div>
    );
  }

  if (error || !badgeData) {
    return (
      <div className={styles.badgeCard}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <div className={styles.badgeError}>
            バッジを読み込めませんでした
            {error && (
              <div style={{ fontSize: "0.75rem", marginTop: "0.5rem" }}>
                {error}
              </div>
            )}
          </div>
        </a>
      </div>
    );
  }

  const badgeImage = badgeData.image;
  const badgeName = badgeData.name;

  // 日付をYYYY.MM形式に変換
  const formatDate = (dateString) => {
    if (!dateString) return null;
    try {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      return `${year}.${month}`;
    } catch (e) {
      return null;
    }
  };

  const formattedDate = formatDate(badgeData.issuedOn);

  // デバッグ用: 発行日が取得できているか確認
  if (badgeData.issuedOn) {
    console.log(
      "Badge issuedOn:",
      badgeData.issuedOn,
      "Formatted:",
      formattedDate
    );
  }

  return (
    <div className={styles.badgeCard}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.badgeLink}
      >
        {badgeImage && !imageError && (
          <img
            src={badgeImage}
            alt={badgeName}
            className={styles.badgeImage}
            onError={(e) => {
              console.error("Failed to load badge image:", badgeImage);
              setImageError(true);
              e.target.style.display = "none";
            }}
            onLoad={() => {
              setImageError(false);
            }}
          />
        )}
        <div className={styles.badgeInfo}>
          <div className={styles.badgeName}>{badgeName}</div>
          {formattedDate && (
            <div className={styles.badgeDate}>{formattedDate}</div>
          )}
        </div>
      </a>
    </div>
  );
}
