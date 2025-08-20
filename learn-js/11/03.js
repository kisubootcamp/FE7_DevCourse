// 1. 기본 자료형
// 1.1 숫자, 논리형, 문자, null, undefined, symbol, bigInt
// 2. 참조 자료형
// 2.1 배열, 객체, 함수

let num = 10;
let num2 = num; // 복사, 깊은 복사 (deep copy)
num = 50;
console.log(num2);

// 얕은 복사
// 복사한 원본 데이터를 조작했을 때, 복사의 대상이 되는 값이 변경되는 것
// 참조 자료형의 값을 변수에 대입하는 경우 얕은 복사가 일어남
const arr = ["a"];
const arr2 = arr; // 얕은 복사(shallow copy)
arr.push("b");
console.log(arr2);

// 5. 객체를 복사(병합)
const original = { name : "kim", age: 20 };
const original2 = { age: 40, gender: "male" };

// 5.1 얕은 복사
const shallowCopy = original;
const shallowCopy2 = Object.assign({}, original, original2);
const shallowCopy3 = { ...original, ...original2 };

shallowCopy2.age = 50;
original.age = 90;
console.log(original);
console.log(original2);
console.log(shallowCopy);
console.log(shallowCopy2);
console.log(shallowCopy3);

// 5.2 깊은 복사
const original3 = {age: 40, gender: "male", addr: {zipcode: 111}};

// 고전적 방법
const deepCopy = JSON.parse(JSON.stringify(original3))
const shallowCopy4 = Object.assign({}, original3);

// 최신의 방법
const deepCopy2 = structuredClone(original3);
original3.addr.zipcode = 222;
console.log(original3);
console.log(shallowCopy4);
console.log(deepCopy);
console.log(deepCopy2);

