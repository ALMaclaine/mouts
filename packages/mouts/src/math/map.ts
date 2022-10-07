import { lerp } from './lerp';
import { norm } from './norm';

const map = (
  val: number,
  min1: number,
  max1: number,
  min2: number,
  max2: number
) => lerp(norm(val, min1, max1), min2, max2);
export { map };
