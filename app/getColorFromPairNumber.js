import { MAJOR_COLOR_NAMES, MINOR_COLOR_NAMES } from "./colorNames.constants.js";
import { ColorPair } from './colorPair.js'

export function getColorFromPairNumber(pairNumber) {
  const minorSize = MAJOR_COLOR_NAMES.length;
  const majorSize = MINOR_COLOR_NAMES.length;

  if (pairNumber < 1 || pairNumber > minorSize * majorSize) {
    throw `Argument PairNumber:${pairNumber} is outside the allowed range`;
  }
  let zeroBasedPairNumber = pairNumber - 1;
  let majorColorIndex = parseInt(zeroBasedPairNumber / minorSize);
  let minorColorIndex = parseInt(zeroBasedPairNumber % minorSize);
  let pair = new ColorPair();
  pair.majorColor = MAJOR_COLOR_NAMES[majorColorIndex];
  pair.minorColor = MINOR_COLOR_NAMES[minorColorIndex];
  return pair;
}

