import { isArray } from 'is-ts';

const append = <T>(arr1: T[], add: T[] | T = []) => {
  if (isArray(add)) {
    add.forEach((val) => arr1.push(val));
  } else {
    arr1.push(add);
  }
  return arr1;
};
export { append };
