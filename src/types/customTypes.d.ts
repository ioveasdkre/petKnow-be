/** 設定唯讀 */
type Immutable<T> = {
  readonly [K in keyof T]: Immutable<T[K]>;
};

export { Immutable };