// 1. 기본 자료형
// 숫자, 논리형, 문자, null, undefined, symbol, BigInt
// 2. 참조 자료형
// 배열, 객체, 함수

// 왜 이렇게 자료ㅕ형을 나눠놨을까?

let num = 10;
let num2 = num;
// 복사한 원본 데이터를 조작했을 때, 복사의 대상이 되는 값은 변경되지 않음
// 이를 복사. 깊은 복사라고 함. deep copy
num = 50;
console.log(num); // 50
console.log(num2); // 10

// 반대로 복사한 원본 데이터를 조작했을 때, 복사의 대상이 되는 값이 같이 변경됨
// 이는 얕은 복사라고 함. shallow copy
const arr = ["a"];
const arr2 = arr;
arr.push("b");
console.log(arr); // [ 'a', 'b' ]
console.log(arr2); // [ 'a', 'b' ]
// 왜 이런 일이 생기냐?? 참조 자료형은 배열이라는 바구니?에 값이 저장되는게 아니라서 메모리에 저장된 값을 불러오는 식이라 그럼.
// 메모리에 저장된 값을 변경하게 되므로
