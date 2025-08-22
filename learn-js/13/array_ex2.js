// 문제 1: 중첩 배열 평탄화
// n차원 배열을 1차원 배열로 평탄화하는 함수를 작성하세요. 배열의 모든 요소를 순회하면서 배열인 요소를 만나면 재귀적으로 평탄화해야 합니다.
function flattenArray(arr) {
    let result = [];
    for (const num of arr) {
        if (Array.isArray(num)) {
            result = result.concat(flattenArray(num));
        } else {
            result.push(num);
        }
    }
    return result;
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


// 문제 5: 배열 차집합
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