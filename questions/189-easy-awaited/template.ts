type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U> ? U extends Promise<unknown>? MyAwaited<U>: U : never;

/**
 * 知识点：
 * 1.infer 推断类型
 * 2.嵌套
 */
