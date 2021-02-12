# vrchat-friend-instance-list

## プロジェクトClone後まずやること

### `.sentryclirc` の作成

`.sentryclirc.sample` をコピーして、中身を埋める。Sentryのrelease登録するのに必須。

## コンポーネントカテゴリ

コンポーネントは以下の２カテゴリで分類する。

+ Presentational Component
+ Container Component

命名規則は、例えばトップページのコンポーネントの場合、

+ Presentational Component => `TopPageComponent`
+ Container Component => `TopPageContainerComponent`

とする。

## カスタムエラー型

以下のような形で使用できる `BaseError` クラスを用意しているので、カスタムエラー型が必要な場合はこれを使うこと

```
export class NetworkError extends BaseError<{ status?: number }> {
  constructor(private readonly _status?: number, e?: string) {
    super(e)
  }

  get details() {
    return {
      status: this._status,
    }
  }
}
```

エラーに付加情報が必要な場合は、 `details` で返すようにすること。abstractにしているので付加情報が不要な場合でも空オブジェクトを返す必要がある。

## CSSの規約

### 全体

+ 命名はキャメルケース
+ 一部、接頭語を付与する必要がある場合はケバブケースで付与（ex: `u-alignCenter` ）

### コンポーネント

+ コンポーネントのスタイルは、CSSModuleで記述

### グローバルCSS

+ 以下のカテゴリに関しては、グローバルCSSとして定義
+ 名前被りを防ぐために、カテゴリ毎に接頭語を付与する

#### utility

+ 接頭語として `u-` を記述
+ マージン調整だけしたい時など、わざわざクラスを付与してCSSを書くまでもないような時に使用

#### transitions

+ 接頭語として `t-` を記述
+ CSSTransitionに使用するスタイル

### 色の指定

色はCSS Variablesでアプリルート（#app）に対して指定している。

この変数を利用して色を指定する際は `rgb` または `rgba` を必ず使用すること。（`rgba(var(--mainColor), 0.8)` みたいに指定できるようにするために、色を16進数ではなく `--blackcolor: 0, 0, 0` みたいにrgbで設定しているのでそうしないと反映されない。）
