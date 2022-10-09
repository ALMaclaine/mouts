import { repeat } from './repeat';

const rpad = (str: string, minLen: number, ch = ' ') => {
  const smaller = str.length < minLen;
  if (smaller) {
    return str + repeat(ch, minLen - str.length);
  } else {
    return str;
  }
};
export { rpad };
