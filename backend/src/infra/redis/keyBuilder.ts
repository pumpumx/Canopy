
export const keyBuilder = {
  orderIdempotentKey: (key: string) => `v1:order:${key}`,
}
