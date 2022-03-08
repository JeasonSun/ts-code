type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}
/**
 * 知识点：
 * 1. in
 * 2. keyof
 */