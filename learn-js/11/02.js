//기본 자료형
// : 숫자, 논리형, 문자, null, undefined, symbol, bigint
//참조 자료형
// :배열 객체 함수

let num = 10;
let num2 = num; //다른 데이터를 어떤 변수에 할당할 때, 이를 복사라고 함.
//깊은 복사: 원본 데이터와 복사 데이터가 아무런 연관이 없을 때
//얕은 복사: 원본 데이터 조작 시 복사 데이터 값이 같이 변경되는 것
num = 50;
console.log(num2);

//기본 자료형과 다르게 참조 자료형은 변수가 값 자체가 들어가는 것이 아님. 주소 값을 넣음.
//배열은 값을 가지는 것이 아닌 값이 들어있는 메모리 공간 주소값을 가짐
//얕은 복사
const arr = ["a"];
const arr2 = arr;

arr.push("b");
console.log(arr2);

//객체를 복사(병합)
const original = { name: "Kim", age: 20 };
const original2 = { gender: "male", age: 50, addr: { zipcode: 1000 } };

//얕은 복사
const shallowcopy = original;
const shallowcopy2 = Object.assign({}, original, original2);
const shallowcopy3 = { ...original, ...original2 };

// shallowcopy2.addr.zipcode = 50; //객체 안의 객체는 궁극적으로 얕은 복사
// console.log(original);
// console.log(original2);
// console.log(shallowcopy2);

//깊은 복사
const deepCopy = JSON.parse(JSON.stringify(original2));
deepCopy.addr.zipcode = 10;
console.log(original2);
console.log(deepCopy);

//고전적 방법
//const deepCopy = JSON.parse(JSON.stringify(original2));
