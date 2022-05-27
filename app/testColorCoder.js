import { getPairNumberFromColor } from "./getPairNumberFromColor.js";
import { getColorFromPairNumber } from "./getColorFromPairNumber.js";
import { ColorPair } from "./colorPair.js";
import { getReferenceManual } from "./referenceManual.js";

function testGetColorFromPairNumber(pairNumber, majorColor, minorColor) {
  let testPair = getColorFromPairNumber(pairNumber);
  console.log(`[In]Pair Number: ${pairNumber}, [Out] Colors:${testPair}`);
  console.assert(testPair.majorColor == majorColor);
  console.assert(testPair.minorColor == minorColor);
}

function testGetPairNumberFromColor(majorColor, minorColor, testPairNumber) {
  let testPair = new ColorPair();
  testPair.majorColor = majorColor;
  testPair.minorColor = minorColor;
  let pairNumber = getPairNumberFromColor(testPair);
  console.log(`[In]Colors: ${testPair}, [Out] PairNumber: ${pairNumber}`);
  console.assert(pairNumber == testPairNumber);
}

function test() {
  testGetColorFromPairNumber(4, "WHITE", "BROWN");
  testGetColorFromPairNumber(5, "WHITE", "SLATEGRAY");
  testGetColorFromPairNumber(23, "RED", "GREEN");
  testGetPairNumberFromColor("YELLOW", "GREEN", 18);
  testGetPairNumberFromColor("RED", "BLUE", 6);
}

console.log("----------------TEST CASES----------------");
test();

console.log("------------REFERENCE MANUAL--------------");
console.table(getReferenceManual());


