//4
// -1은 왼쪽으로 한 칸 옮기나 오른쪽으로 4칸 옮기나 똑같음
function rotateArray(arr, steps) {
  const n = arr.length;
  const k = ((steps % n) + n) % n; // steps 크기가 배열의 크기를 넘어갈 것을 대비해서(전형적인 정규화 코드의 예시)
  return arr.slice(-k).concat(arr.slice(0, -k));
}

const input = [1, 2, 3, 4, 5];
console.log(rotateArray(input, 2)); // [4, 5, 1, 2, 3]
console.log(rotateArray(input, -1)); // [2, 3, 4, 5, 1]
