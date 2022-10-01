const isKindOf = (val?: unknown): string =>  {
  return Object.prototype.toString.call(val).slice(8, -1);
}

export {isKindOf};
