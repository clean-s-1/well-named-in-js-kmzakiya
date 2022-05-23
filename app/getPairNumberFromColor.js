import { MAJOR_COLOR_NAMES, MINOR_COLOR_NAMES } from "./colorNames.constants.js";

export function getPairNumberFromColor(pair) {
  let majorColorIndex = -1;
  for (let i = 0; i < MAJOR_COLOR_NAMES.length; i++) {
    if (MAJOR_COLOR_NAMES[i] == pair.majorColor) {
      majorColorIndex = i;
      break;
    }
  }

  let minorColorIndex = -1;
  for (let i = 0; i < MINOR_COLOR_NAMES.length; i++) {
    if (MINOR_COLOR_NAMES[i] == pair.minorColor) {
      minorColorIndex = i;
      break;
    }
  }

  if (majorColorIndex == -1 || minorColorIndex == -1) {
    throw `Unknown Colors:${pair.toString()}`;
  }

  return majorColorIndex * MINOR_COLOR_NAMES.length + (minorColorIndex + 1);
}

