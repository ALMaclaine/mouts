import { ExecFunction, ExecRecord } from '@mouts/types';
import { exec } from '@mouts/lang';

const forIn = <T>(obj: ExecRecord, fn: ExecFunction, self?: T): void => {
  for (const key in obj) {
    if (exec(fn, obj, key, self) === false) {
      break;
    }
  }
};
export { forIn };
