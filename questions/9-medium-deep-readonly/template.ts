type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Record<string, unknown> ? DeepReadonly<T[K]> : T[K]
}
/**
 * 知识点：
 * Record<Keys,Type>构造一个对象类型，其属性key是Keys，属性value是Type
 * https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
 * 
 */