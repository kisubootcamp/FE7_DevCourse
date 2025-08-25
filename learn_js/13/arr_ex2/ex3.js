// 배열에서 중복된 요소를 제거하고, 각 요소의 등장 빈도수를 계산하는 함수를 작성하세요.

function getFrequency(arr) {
  // const frequency = {};
  // const unique = [];
  // for (v of arr) {
  //   if (!frequency[v]) {
  //     frequency[v] = 0;
  //     unique.push(v);
  //   }
  //   frequency[v] += 1;
  // }
  // return { unique: unique, frequency: frequency };
  return arr.reduce((acc, v) => {
    if (!acc[v]) acc[v] = 0;
  }, {});
}

console.log(getFrequency([1, 2, 3, 1, 2, 1, 4, 5, 4]));
// 출력: {
//   unique: [1, 2, 3, 4, 5],
//   frequency: { '1': 3, '2': 2, '3': 1, '4': 2, '5': 1 }
// }

console.log(getFrequency(['a', 'b', 'a', 'c', 'b', 'a']));
// 출력: {
//   unique: ['a', 'b', 'c'],
//   frequency: { 'a': 3, 'b': 2, 'c': 1 }
// }

console.log(getFrequency([true, false, true, true]));
// 출력: {
//   unique: [true, false],
//   frequency: { 'true': 3, 'false': 1 }
// }

console.log(getFrequency([]));
// 출력: { unique: [], frequency: {} }

console.log(getFrequency([1]));
// 출력: { unique: [1], frequency: { '1': 1 } }
