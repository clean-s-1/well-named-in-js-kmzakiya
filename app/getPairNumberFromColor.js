import { MAJOR_COLOR_NAMES, MINOR_COLOR_NAMES } from "./colorNames.constants.js";

export function getPairNumberFromColor(pair) {
  const majorColorIndex = getColorIndex(pair.majorColor, MAJOR_COLOR_NAMES);
  const minorColorIndex = getColorIndex(pair.minorColor, MINOR_COLOR_NAMES);

  if (majorColorIndex == -1 || minorColorIndex == -1) {
    throw `Unknown Colors:${pair.toString()}`;
  }

  return majorColorIndex * MINOR_COLOR_NAMES.length + (minorColorIndex + 1);
}

function getColorIndex(color, colourNames) {
  let index = -1;
  for (let i = 0; i < colourNames.length; i++) {
    if (colourNames[i] == color) {
      index = i;
      break;
    }
  }
  return index;
}
