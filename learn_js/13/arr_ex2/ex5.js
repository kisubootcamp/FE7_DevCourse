// 두 배열이 주어졌을 때, 첫 번째 배열에는 있지만 두 번째 배열에는 없는 요소들을 반환하는 함수를 작성하세요.

function arrayDifference(arr1, arr2) {
  return arr1.filter((v) => !arr2.includes(v));
}

console.log(arrayDifference([1, 2, 3, 4, 5], [2, 4, 6]));
// 출력: [1, 3, 5]

console.log(arrayDifference([1, 1, 2, 2], [1, 2]));
// 출력: []

console.log(arrayDifference([1, 2, 3], []));
// 출력: [1, 2, 3]

console.log(arrayDifference([], [1, 2, 3]));
// 출력: []

console.log(arrayDifference([1, 2, 3], [4, 5, 6]));
// 출력: [1, 2, 3]

console.log(arrayDifference(['a', 'b', 'c'], ['a']));
// 출력: ['b', 'c']
