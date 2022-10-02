import { ExecFunction, ExecRecord, ExecReturn } from '../types/exec-function';

const exec = <T>(
  fn: ExecFunction,
  obj: ExecRecord,
  key: string,
  self?: T
): ExecReturn => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return fn.call<T | undefined, any[], ExecReturn>(self, obj[key], key, obj);
};
export { exec };
