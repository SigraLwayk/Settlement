const facilities = {
    "堆肥工場":
    {
        useItem1: "乾燥した糞",
        useCount1: 20,
        useItem2: "水",
        useCount2: 5,
        product: "肥料",
        productCount: 10,
        cycleDays: 10,
        employee: 4,
        update: ["効率化", "新社員", "レンが製の窯"]
    },
    "飼料工場":
    {
        useItem1: "トウモロコシ",
        useCount1: 40,
        useItem2: ["エンドウ豆", "大豆", "ひよこ豆"],
        useCount2: 40,
        product: "飼料",
        productCount: 30,
        cycleDays: 5,
        employee: 10,
        update: ["効率化", "新社員", "レンが製の窯"]
    },
    "釣り埠頭":
    {
        product: "魚",
        productCount: 2,
        cycleDays: 4,
        employee: 4,
        update: "釣り餌"
    },
    "養殖池":
    {
        product: "魚",
        productCount: 8,
        cycleDays: 4,
        employee: 2,
        update: "釣り餌"
    },
    "漁港-アザラシの毛皮":
    {
        useItem1: "漁網",
        useCount1: 10,
        product: "アザラシの毛皮",
        productCount: 3,
        cycleDays: 10,
        employee: 4,
        update: "釣り餌"
    },
    "漁港-ロブスター":
    {
        useItem1: "漁網",
        useCount1: 1,
        product: "ロブスター",
        productCount: 10,
        cycleDays: 8,
        employee: 4,
        update: "釣り餌"
    },
    "漁港-脂肪":
    {
        useItem1: "漁網",
        useCount1: 1,
        product: "脂肪",
        productCount: 10,
        cycleDays: 8,
        employee: 4,
        update: "釣り餌"
    },
    "小さな漁港-魚":
    {
        useItem1: "漁網",
        useCount1: 1,
        product: "魚",
        productCount: 20,
        cycleDays: 5,
        employee: 4,
        update: "釣り餌"
    },
    "小さな漁港-牡蠣":
    {
        useItem1: "漁網",
        useCount1: 1,
        product: "牡蠣",
        productCount: 12,
        cycleDays: 12,
        employee: 4,
        update: "釣り餌"
    },
    "養蜂場-蜂蜜":
    {
        product: "蜂蜜",
        productCount: 7,
        cycleDays: 10,
        employee: 3,
        update: "バスケット"
    },
    "養蜂場-蜜蝋":
    {
        product: "蜜蝋",
        productCount: 6,
        cycleDays: 5,
        employee: 3,
        update: "バスケット"
    },
    "井戸":
    {
        product: "水",
        productCount: 7,
        cycleDays: 4,
        employee: 1,
    },
    "大きな井戸":
    {
        product: "水",
        productCount: 7,
        cycleDays: 4,
        employee: 2,
        update: "歯車"
    },
    "貯水池":
    {
        product: "水",
        productCount: 15,
        cycleDays: 4,
        employee: 2,
        update: "歯車"
    },
    "鉱山-鉄鉱石":
    {
        product: "鉄鉱石",
        productCount: 3,
        cycleDays: 9,
        employee: 10,
        update: "ランタン"
    },
    "鉱山-石炭":
    {
        product: "石炭",
        productCount: 3,
        cycleDays: 9,
        employee: 10,
        update: "ランタン"
    },
    "鉱山-銀":
    {
        product: "銀",
        productCount: 2,
        cycleDays: 15,
        employee: 10,
        update: "ランタン"
    },
    "古い鉱山-鉄鉱石":
    {
        product: "鉄鉱石",
        productCount: 3,
        cycleDays: 7,
        employee: 10,
        update: "ランタン"
    },
    "古い鉱山-石炭":
    {
        product: "石炭",
        productCount: 3,
        cycleDays: 7,
        employee: 10,
        update: "ランタン"
    },
    "古い鉱山-銀":
    {
        product: "銀",
        productCount: 2,
        cycleDays: 12,
        employee: 10,
        update: "ランタン"
    },
    "深層鉱山鉱山-鉄鉱石":
    {
        useItem1: "ランプオイル",
        useCount1: 1,
        product: "鉄鉱石",
        productCount: 5,
        cycleDays: 8,
        employee: 10,
        update: "ランタン"
    },
    "深層鉱山鉱山-石炭":
    {
        useItem1: "ランプオイル",
        useCount1: 1,
        product: "石炭",
        productCount: 5,
        cycleDays: 8,
        employee: 10,
        update: "ランタン"
    },
    "深層鉱山鉱山-銀":
    {
        useItem1: "ランプオイル",
        useCount1: 1,
        product: "銀",
        productCount: 4,
        cycleDays: 18,
        employee: 10,
        update: "ランタン"
    },
    "開けた鉱山-鉄鉱石":
    {
        product: "鉄鉱石",
        productCount: 3,
        cycleDays: 7,
        employee: 4,
        update: "ランタン"
    },
    "開けた鉱山-石炭":
    {
        product: "石炭",
        productCount: 3,
        cycleDays: 7,
        employee: 4,
        update: "ランタン"
    },
    "開けた鉱山-石炭":
    {
        product: "石炭",
        productCount: 3,
        cycleDays: 7,
        employee: 4,
        update: "ランタン"
    },
    "開けた鉱山-銀":
    {
        product: "銀",
        productCount: 2,
        cycleDays: 12,
        employee: 4,
        update: "ランタン"
    }


};