import { trim } from './trim';

interface TruncateOptions {
  append?: string;
  onlyFullWords?: boolean;
}

const truncate = (
  str: string,
  maxChars: number,
  options: TruncateOptions = {}
) => {
  const { append = '...', onlyFullWords = false } = options;

  str = trim(str);
  if (str.length <= maxChars) {
    return str;
  }
  str = str.slice(0, maxChars - append.length);
  //crop at last space or remove trailing whitespace
  str = onlyFullWords ? str.slice(0, str.lastIndexOf(' ')) : trim(str);
  return str + append;
};
export { truncate };
