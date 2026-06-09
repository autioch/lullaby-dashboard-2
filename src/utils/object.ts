export function filterObject<T extends object>(
  obj: T,
  filterFn: (value: [key: string, value: unknown]) => boolean
) {
  return Object.fromEntries(Object.entries(obj).filter(filterFn));
}
