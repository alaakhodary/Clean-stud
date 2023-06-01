export function generateId(): string {
  const randomStr = Math.floor(Math.random() * 10000);
  const id = `id_${randomStr}`;
  return id;
}
