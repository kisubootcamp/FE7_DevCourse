function getFrequency(arr) {
  const frequency = arr.reduce((m, v) => {
    m[v] = (m[v] || 0) + 1;
    return m;
  }, {});

  const unique = arr.filter((v, i) => arr.indexOf(v) === i);
  return { unique, frequency };
}

console.log(getFrequency([1, 2, 3, 1, 2, 1, 3, 5, 4]));
// 출력: {
//   unique: [1, 2, 3, 4, 5],
//   frequency: { '1': 3, '2': 2, '3': 1, '4': 2, '5': 1 }
// }

console.log(getFrequency(["a", "b", "a", "c", "b", "a"]));
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
