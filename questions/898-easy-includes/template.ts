type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2) ? true : false;

type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ? Equal<First, U> extends true ? true : Includes<Rest, U> : false;

/**
 * 知识点：
 * Equal: 如何判断两个类型是相等的类型？
 * 
 * Includes:
 * infer 推断，相当于定义了一个变量
 * 嵌套递归调用
 */