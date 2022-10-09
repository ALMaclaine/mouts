import { ltrim } from './ltrim';

const stripMarginLambda = (marginChar: string) => {
  let hasSeen = false;
  return (str: string) => {
    if (str === marginChar) hasSeen = true;
    return hasSeen;
  };
};
const stripMargin = (str: string, marginChar = '|') => {
  return ltrim(str, stripMarginLambda(marginChar));
};
export { stripMargin };
