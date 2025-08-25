// 3.객체를 **재귀적으로 동결**하는 함수를 작성하세요.
// 함수 실행 후, 모든 중첩 객체가 `Object.isFrozen`으로 `true`가 되어야 합니다.
function deepFreeze(obj) {
  Object.freeze(obj);

  for (const key in obj) {
    const value = obj[key];
    if (value !== null && typeof value === 'object') {
      if (!Object.isFrozen(value)) {
        deepFreeze(value);
      }
    }
  }
  return obj;
}

const obj = { a: { b: 1 } };
deepFreeze(obj);

obj.a.b = 2; // 실패
console.log(obj.a.b); // 1
console.log(Object.isFrozen(obj)); // true
console.log(Object.isFrozen(obj.a)); // true
