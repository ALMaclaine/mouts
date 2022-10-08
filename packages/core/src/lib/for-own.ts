import { forIn } from './for-in';
import { ExecFunction, ExecRecord } from '@mouts/types';
import { exec } from './exec';
import { hasOwn } from './has-own';

const forOwn = <T>(obj: ExecRecord, fn: ExecFunction, self?: T): void => {
  forIn<T>(
    obj,
    function (_val: unknown, key: string, objPassed: ExecRecord) {
      if (hasOwn(obj, key)) {
        return exec(fn, objPassed, key, self);
      }
    },
    self
  );
};
export { forOwn };
