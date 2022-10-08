const hasOwn = (obj: object, prop: string) =>
  Object.prototype.hasOwnProperty.call(obj, prop);
export { hasOwn };
