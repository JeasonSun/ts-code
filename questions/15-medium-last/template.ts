type Last<T extends any[]> = T extends [...any[], infer R] ? R: never

/**
 * 知识点：
 * 1. extends
 * 2. infer
 */