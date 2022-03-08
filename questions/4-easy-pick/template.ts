type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

/**
 * 知识点：
 * 1. keyof 
 * 2. in
 */