// bubble sort
// selection sort
function sortKeys(obj) {
  const keys = Object.keys(obj); // [키]
  const out = {};
  for (let i = 0; i < keys.length; i++) {
    let minKey = null;
    let minIndex = -1;

    // 남아 있는 키 중 가장 작은 것 찾기
    for (let j = 0; j < keys.length; j++) {
      if (keys[j] !== null) {
        if (minKey === null || keys[j] < minKey) {
          minKey = keys[j];
          minIndex = j;
        }
      }
    }

    // 결과 객체에 추가
    out[minKey] = obj[minKey];

    // 사용한 키는 null로 표시
    keys[minIndex] = null;
  }
  return out;
}

console.log(sortKeys({ b: 2, a: 1, c: 3 })); // { a: 1, b: 2, c: 3 }
console.log(sortKeys({ z: 0, y: 1 })); // { y: 1, z: 0 }
console.log(sortKeys({})); // {}
console.log(sortKeys({ bb: 1, b: 2 })); // { b: 2, bb: 1 }
