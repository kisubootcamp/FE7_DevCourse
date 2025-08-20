// 기본 자료형
// 숫자, 논리형, 문자, null, undefined, symbol, bigint
// 참조 자료형
// 배열, 객체, 함수

// 얕은 복사
let num = 10;
let num2 = num; // 얕은 복사
num2 = 20; // num2만 변경됨

// 깊은 복사
// 복사한 원본 데이터를 조작했을 떄, 복사의 대상이 되는 값도 같이 변경되는 복사
// 침조 복사

//

// 객체 복사
const original = { name: "lee", age: 20, hobbies: ["reading", "gaming"] };
const copy = original; // 얕은 복사
const copy2 = Object.assign({}, original); // 얕은 복사
// 여러개의 객체를 하나로 합칠 때 유용
// Object.assign은 얕은 복사이므로 중첩된 객체나 배열은 참조로 복사됨
const copy3 = { ...original, ...copy2 }; // 얕은 복사
// 모두 얕은 복사

// 객체 깊은 복사
const deepCopy = JSON.parse(JSON.stringify(original));
console.log(deepCopy); // { name: 'lee', age: 20, hobbies: [ 'reading', 'gaming' ] }

// 객체를 복사할 때는 깊은 복사 방식을 사용해야 한다.

// 고전적인 객체 깊은 복사 방법
const deepCopy2 = structuredClone(original);

//

// 리엑트에서 객체를 복사할 때는 아래 방식을 자주 사용한다.
const copy4 = { ...original, ...copy2 }; // 얕은 복사
const deepCopy3 = JSON.parse(JSON.stringify(original)); // 깊은 복사
