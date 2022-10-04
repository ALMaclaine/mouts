import { ExecFunction, ExecRecord } from 'is-ts';
import { exec } from '../lang/exec';

const forIn = <T>(obj: ExecRecord, fn: ExecFunction, self?: T): void => {
  for (const key in obj) {
    if (exec(fn, obj, key, self) === false) {
      break;
    }
  }
};
export { forIn };
