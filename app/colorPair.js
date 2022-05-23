export function ColorPair() {
  this.majorColor;
  this.minorColor;
}

ColorPair.prototype.toString = function () {
  return `MajorColor: ${this.majorColor}, MinorColr: ${this.minorColor}`;
};
