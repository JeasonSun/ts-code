type MyExclude2<T, K> = T extends K ? never : T;

type MyOmit1<T, K extends keyof T> = {
  [P in MyExclude2<keyof T, K>]: T[P]
}

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in K]: T[P]
} & {
    [U in MyExclude2<keyof T, K>]: T[U]
  }

/**
 * 知识点：
 * 1. 对union(联合)中指定的类型进行排除 - MyExclude2
 * 2. 删除对象中的key - MyOmit1 
 * 3. 如果在K 中，那就设置readonly
 * 4. 其余的都是正常
 * 5. 对于没有传参数的情况，需要将所有的key设置为readonly -> 设置默认值
 * 5.1 如何设置默认值？  K = keyof T
 */