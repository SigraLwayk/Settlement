# js/eventListeners.js 設計

## 役割
ユーザー入力を監視し、ローカルストレージへの保存と再計算を行うイベントリスナー群。

## 主な処理
- `DOMContentLoaded` で監視を開始。
- 数値入力の `input` イベントで入力値を保存し `Monado.updater()` を呼び出す。
- セレクトボックスの `change` イベントでも同様の処理を行う。

## 設定イベント
- `document` : `DOMContentLoaded`
- `tbody` : `input` (数値入力欄)
- `tbody` : `change` (セレクトボックス)

## 拡張ポイント
入力項目を増やす場合や保存ロジックを変更する際に編集する。
