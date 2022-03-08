type MyExclude1<T, K> = T extends K ? never : T;

type MyOmit<T, K extends keyof T> = {
  [P in MyExclude1<keyof T, K>]: T[P]
}

/**
 * 步骤：
 * 1. Exclude 排除 union中的一些类型
 * 2. 遍历排除后的key
 */