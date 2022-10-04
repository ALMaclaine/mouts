import { forIn } from './for-in';
import { exec } from '../lang/exec';
import { hasOwn } from './has-own';
import { ExecRecord, ExecFunction } from 'is-ts';

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
