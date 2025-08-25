function arrayDifference(arr1, arr2) {
  if (arr2.length === 0 || arr1.length === 0) return arr1;
  const result = arr1.filter((element) => {
    for (let i = 0; i < arr2.length; i++) {
      if (element === arr2[i]) break;
      return element;
    }
  });
  return result;
}

//강사님 풀이
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

console.log(arrayDifference(["a", "b", "c"], ["a"]));
// 출력: ['b', 'c']
