// 1. 중첩 배열 평탄화 : n차원 배열을 1차원 배열로 평탄화하는 함수를 작성하세요.
// 배열의 모든 요소를 순회하면서 배열인 요소를 만나면 재귀적으로 평탄화해야 합니다.
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
