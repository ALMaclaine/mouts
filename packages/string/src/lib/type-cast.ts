import { UNDEFINED } from '@mouts/constants';
import { isNaN } from '@mouts/is';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const typeCast = (str: string): any => {
  if (str === null || str === 'null') {
    return null;
  } else if (str === 'true') {
    return true;
  } else if (str === 'false') {
    return false;
  } else if (str === UNDEFINED || str === 'undefined') {
    return UNDEFINED;
  } else {
    const parsed = parseFloat(str);
    if (str === '' || isNaN(parsed)) {
      return str;
    }
    return parsed;
  }
};
export { typeCast };
