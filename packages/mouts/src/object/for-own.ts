import { forIn } from './for-in';
import { ExecFunction, ExecRecord } from '../types/exec-function';
import { exec } from '../lang/exec';
import { hasOwn } from './has-own';

const forOwn = <T>(obj: ExecRecord, fn: ExecFunction, self?: T): void => {
  forIn<T>(
    obj,
    function (val, key, objPassed) {
      if (hasOwn(obj, key)) {
        return exec(fn, objPassed, key, self);
      }
    },
    self
  );
};
export { forOwn };
