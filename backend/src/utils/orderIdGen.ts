
export function generateUUID(): string {
  const uuid = crypto.randomUUID()

  return uuid;
}
