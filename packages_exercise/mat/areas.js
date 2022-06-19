module.exports.circleArea = function circleArea(radius) {
  const pi = Math.PI;
  return pi * (radius * radius);
};

module.exports.triangleArea = function triangleArea(base, height) {
  return (base * height) / 2;
};

module.exports.squareArea = function squareArea(side) {
  return side * side;
};

module.exports.rectangleArea = function rectangleArea(length, height) {
  return length * height;
};
