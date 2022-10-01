const UNDEFINED = undefined;
const isUndefined = (val: unknown): val is undefined => val === UNDEFINED;
export { isUndefined };
