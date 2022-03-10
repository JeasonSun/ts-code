type TupleToUnion<T extends readonly unknown[]> = T[number];

/**
 * 知识点：
 * 1. 元组: 使用readonly 来修饰 []
 * 2. 如果遍历元组？  T[number]
 */
