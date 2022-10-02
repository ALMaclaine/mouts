import { exec } from '../lang/exec';
import { ExecFunction, ExecRecord } from '../types/exec-function';

const forIn = <T>(obj: ExecRecord, fn: ExecFunction, self?: T): void => {
  for (const key in obj) {
    if (exec(fn, obj, key, self) === false) {
      break;
    }
  }
};
export { forIn };
