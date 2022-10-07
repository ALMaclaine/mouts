const flattenArray = <T>(arr: T[], depth: number = Number.MAX_VALUE) =>
  arr.flat(depth);
export { flattenArray };
