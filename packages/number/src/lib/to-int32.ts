const toInt32 = (val: number) => {
  // we do not use lang/toNumber because of perf and also because it
  // doesn't break the functionality
  return ~~val;
};
export { toInt32 };
