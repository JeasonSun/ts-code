type If<C extends boolean, T, F> = C extends true ? T : F;

/**
 * 知识点：
 * 如何判断boolean值真假？
 * C extends true
 */