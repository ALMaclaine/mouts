import { ExecRecord } from '@mouts/types';
import { forOwn } from '@mouts/core';

const everyObject = (
  obj: ExecRecord,
  cb: (val: ExecRecord, key: string, inRecord: ExecRecord) => boolean
) => {
  let result = true;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  forOwn(obj, function (val: any, key: string) {
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
