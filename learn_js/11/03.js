// 1. 기본 자료형
// 1.1 숫자, 논리형, 문자, null, undefined, symbol, bigint
// 2. 참조 자료형
// 2.1 배열, 객체, 함수

const num = 10;
const num2 = num; // 깊은 복사

num = 50;
console.log(num2);

// 얇은 복사
// 복사한 원본 데이터를 조작했을 때, 복사의 대상이 되는 값이 같이 변경되는 것.
const arr = ['a'];
const arr2 = arr; // 얕은 복사
arr.push('b');
console.log(arr2);
