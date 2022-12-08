export type Opcional<T extends any> = { [key in keyof T]?: T[key] };
