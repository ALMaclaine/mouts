import { repeat } from './repeat';

const lpad = (str: string, minLen: number, ch = ' ') => {
  const smaller = str.length < minLen;
  if (smaller) {
    return repeat(ch, minLen - str.length) + str;
  } else {
    return str;
  }
};
export { lpad };
