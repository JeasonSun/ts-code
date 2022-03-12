type Pop<T extends any[]> = T extends[...infer P, infer U] ? P: never;
