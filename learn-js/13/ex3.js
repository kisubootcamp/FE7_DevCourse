// 배열 내장 객체
// 연습 문제 ++
// 어렵다.. 나중에 더 배운 후에 풀어보기

// 8.
// 배열의 요소를 무작위로 섞는 함수를 작성하세요. 모든 순열이 동일한 확률로 나타나야 합니다.

function shuffle(arr) {
  // 여기에 코드를 작성하세요
}

const deck = [1, 2, 3, 4, 5];
console.log(shuffle([...deck])); // [3, 1, 5, 2, 4] (무작위)
console.log(shuffle([...deck])); // [2, 5, 1, 4, 3] (무작위)
console.log(shuffle([...deck])); // [4, 3, 5, 1, 2] (무작위)