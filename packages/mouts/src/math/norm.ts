import { clamp } from './clamp';

const norm = (val: number, x: number, y: number) => clamp((val - x) / (y - x));
export { norm };
