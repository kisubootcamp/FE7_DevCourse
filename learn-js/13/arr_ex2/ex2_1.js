// 배열 내장 객체
//1

function flattenArray(arr) {
  if (arr.length === arr.join(",").length) return arr;
  return flattenArray(arr.flat(1));
}
//강사님 풀이

function flattenArray(arr) {
  return arr.reduce((r, v) => {
    return r.concat(Array.isArray(v) ? flattenArray(v) : [v]);
  }, []);
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]], 7]));
// 출력: [1, 2, 3, 4, 5, 6, 7]

console.log(flattenArray([1, [], [2, 3, []], [4, [5, [6]]]]));
// 출력: [1, 2, 3, 4, 5, 6]

console.log(flattenArray([[[]]]));
// 출력: []

console.log(flattenArray([1, [2, [3, [4, [5]]]]]));
// 출력: [1, 2, 3, 4, 5]

console.log(flattenArray([1, 2, 3]));
// 출력: [1, 2, 3]
