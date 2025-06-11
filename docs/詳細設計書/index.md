# index.html 設計

## 役割
施設管理表のベースとなるHTMLページ。テーブル構造を定義し、JavaScriptを読み込んで動的に行を生成する。

## 主な要素
- `#facilityTable` : 施設の一覧を表示するテーブル。ヘッダ固定でtbodyに行が挿入される。
- `<script>`タグ : `data.js` などのスクリプトを読み込み、ページロード時に `Monado.updater()` を実行する。

## 拡張ポイント
- 列の追加やUI変更はこのHTMLに手を入れる。
