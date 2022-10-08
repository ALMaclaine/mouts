const toUInt = (val: number) => {
  // we do not use lang/toNumber because of perf and also because it
  // doesn't break the functionality
  return val >>> 0;
};
export { toUInt };
