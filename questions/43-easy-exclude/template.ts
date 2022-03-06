type MyExclude<T, U> = T extends U ? never : T;

/**
 * 知识点：
 * extends的比对规律
 * T extends U 会把T中的每一个类型都和U逐一比较，如果为true就返回T。 
 */
