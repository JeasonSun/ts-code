type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [P in T[number]]: P
}

/**
 * 知识点
 * 1. 如何遍历数组  T[number]
 * 2. typeof  将JS值转换为ts类型
 * 
 * 回顾：
 * keyof T 遍历的是数组的索引
 * 
 */