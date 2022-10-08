const get = (obj: { [key: string]: unknown }, prop: string) => {
  if (!obj || !prop) return;
  const parts = prop.split('.');
  if (parts.length === 0) return;

  const _get = (obj: { [key: string]: unknown }, i = 0): unknown => {
    if (i === parts.length) return obj;
    if (parts[i] !== undefined && obj?.[parts[i]]) {
      return _get(obj[parts[i]] as { [key: string]: unknown }, i + 1);
    }
    return;
  };
  return _get(obj);
};
export { get };
