const append = <T>(arr1: T[], arr2: T[] = []) => {
  const { length: pad } = arr1;
  const { length } = arr2;
  for (let j = 0; j < length; j++) {
    arr1[pad + j] = arr2[j];
  }
  return arr1;
};
export { append };
