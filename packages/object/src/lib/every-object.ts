import { forOwn } from './for-own';
import { ExecRecord } from '@mouts/types';

const everyObject = (
  obj: ExecRecord,
  cb: (val: ExecRecord, key: string, inRecord: ExecRecord) => boolean
) => {
  let result = true;
  forOwn(obj, function (val, key) {
    // we consider any falsy values as "false" on purpose so shorthand
    // syntax can be used to check property existence
    if (!cb(val, key, obj)) {
      result = false;
      return false; // break
    } else {
      return true;
    }
  });
  return result;
};

export { everyObject };
