# js/data.js 設計

## 役割
各施設の生産設定を保持するデータモジュール。オブジェクト `facilities` に施設名をキーとした定義を格納する。

## 主なフィールド
- `useItem1..3` : 使用資源名。配列の場合は選択肢として扱う。
- `useCount1..3` : 各資源の使用数。省略可能。
- `product` / `productCount` : 生産物名と生産数。
- `cycleDays` : 生産サイクル日数。
- `employee` : 必要従業員数。
- `update` : アップグレード候補。

## 拡張ポイント
新しい施設を追加する場合はこのオブジェクトに追記する。
