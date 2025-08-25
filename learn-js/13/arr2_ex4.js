function rotateArray(arr, steps) {
  const n = arr.length;
  const k = ((steps % n) + n) % n; // 정규화 패턴 코드
  return arr.slice(-k).concat(arr.slice(0, -k));
}

// -7 + 5 = -2
// k = n + step = 5 + (-2) = 3
const input = [1, 2, 3, 4, 5];

// n 개
// k = n + step // 5 + 7 = 12

// [4, 5]
// [1, 2, 3]
// [4, 5, 1, 2, 3]

// 4
console.log(rotateArray(input, 2)); // [4, 5, 1, 2, 3]
console.log(rotateArray(input, 7)); // [2, 3, 4, 5, 1]
