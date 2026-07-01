export type MakeRequired<T, K extends keyof T> = Omit<T, K> & {
    [P in K]-?: T[P];
};
