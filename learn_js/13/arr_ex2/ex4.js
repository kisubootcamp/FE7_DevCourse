// 배열을 주어진 스텝만큼 오른쪽으로 회전시키는 함수를 작성하세요. 음수 스텝은 왼쪽 회전을 의미합니다.
function rotateArray(arr, steps) {
  const n = arr.length;
  const k = ((steps % n) + n) % n;
  return arr.slice(-steps).concat(arr.slice(0, -steps));
}

const input = [1, 2, 3, 4, 5];
console.log(rotateArray(input, 2)); // [4, 5, 1, 2, 3]
console.log(rotateArray(input, -1)); // [2, 3, 4, 5, 1]/
