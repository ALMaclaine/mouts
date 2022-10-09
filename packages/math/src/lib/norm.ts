import { clamp } from '@mouts/core';

const norm = (val: number, x: number, y: number) => clamp((val - x) / (y - x));
export { norm };
