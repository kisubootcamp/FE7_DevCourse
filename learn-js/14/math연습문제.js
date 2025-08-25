///// 1
function getAbsoluteValue(num) {
  return Math.abs(num);
}

// 테스트 케이스
console.log(getAbsoluteValue(-5)); // 5
console.log(getAbsoluteValue(3)); // 3

///// 2

function roundNumber(num) {
  return Math.round(num);
}

// 테스트 케이스
console.log(roundNumber(4.6)); // 5
console.log(roundNumber(4.4)); // 4

////// 3
function getMax(a, b) {
  return Math.max(a, b);
}

// 테스트 케이스
console.log(getMax(10, 20)); // 20
console.log(getMax(-5, -3)); // -3

////// 4
function getMin(a, b) {
  return Math.min(a, b);
}

// 테스트 케이스
console.log(getMin(10, 20)); // 10
console.log(getMin(-5, -3)); // -5

////// 5
function calculateSquareRoot(num) {
  return Math.sqrt(num);
}

// 테스트 케이스
console.log(calculateSquareRoot(16)); // 4
console.log(calculateSquareRoot(25)); // 5

///// 6
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 테스트 케이스
console.log(getRandomInt(1, 10)); // 1과 10 사이의 무작위 정수

//// 7
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// 테스트 케이스
console.log(power(2, 3)); // 8
console.log(power(5, 2)); // 25

////8
function calculateSine(angle) {
  return Math.sin(angle);
}

// 테스트 케이스
console.log(calculateSine(Math.PI / 2)); // 1
console.log(calculateSine(0)); // 0

////9
function calculateCircleArea(radius) {
  return Math.pow(radius, 2) * Math.PI;
}

// 테스트 케이스
console.log(calculateCircleArea(5)); // 78.53981633974483
