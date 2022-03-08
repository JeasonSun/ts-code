type MyParameters<T extends (...args: any[]) => any> = T extends (...args: [...infer R]) => any ?[...R]:[];


/**
 * 知识点：
 * 协变(co-variant)：类型收敛。
 * 逆变(contra-variant)：类型发散。
 * https://docs.microsoft.com/zh-cn/dotnet/standard/generics/covariance-and-contravariance
 */