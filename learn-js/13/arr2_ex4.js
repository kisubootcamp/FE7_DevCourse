// 문제 4: 배열 회전
function rotateArray(arr, steps) {
    const n = arr.length;
    const k = ((steps % n) + n) % n; // 정규화 패턴 코드
    return arr.slice(-k).concat(arr.slice(0, -k));
}

const input = [1, 2, 3, 4, 5];
console.log(rotateArray(input, 2)); // [4, 5, 1, 2, 3]
console.log(rotateArray(input, -1)); // [2, 3, 4, 5, 1]

console.log(rotateArray(input, 7)); // [4, 5, 1, 2, 3]
console.log(rotateArray(input, -7)); // [3, 4, 5, 1, 2]
