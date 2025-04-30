#!/bin/bash

# 例：大文字にしたいファイルとパスをリストにしておく
declare -a FILES=(
  "src/components/profile/Profile.jsx"
  "src/components/profile/ProfileImage.jsx"
  "src/components/profile/Profile.module.css"
  "src/components/overview/Overview.jsx"
  "src/components/overview/Overview.module.css"
  # 他にもあれば追加
)

for OLD_PATH in "${FILES[@]}"
do
  NEW_PATH=$(echo "$OLD_PATH" | sed -E 's/([a-z])/\U\1/g') # 小文字→大文字
  git mv "$OLD_PATH" "${OLD_PATH}_tmp"   # 一時的な名前に
  git mv "${OLD_PATH}_tmp" "$NEW_PATH"   # 正しい名前に戻す
done