// 배열 내장 객체

new Array(1, 2, 3, 4, 5); // 배열 생성

// 문자열은 유사 배열 객체이다. 그렇지만 실제 배열은 아니다.
const hello = Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']
console.log(hello[0]); // 'h'
console.log(hello.length); // 5

const fruits = ["apple", "banana", "cherry"];
fruits.push("date"); // 배열에 요소 추가
console.log(fruits); // ['apple', 'banana', 'cherry', 'date']

// 파괴적 메서드 (원본 배열을 파괴)
// 배열의 요소를 변경하거나 제거하는 메서드
// // 예: push, pop, shift, unshift, splice 등
// shift: 배열의 첫 번째 요소를 제거하고 그 값을 반환

//

// 비파괴적 메서드 (원본 배열을 파괴하지 않음)
// 배열의 요소를 변경하지 않고 새로운 배열을 반환하는 메서드
// // 예: map, filter, slice, concat 등

// 외우진 말고, 콘솔에 찍어보는 방식으로 검증해서 사용

const numbers = [1, 2, 3];
const doubled = numbers.map(() => 10);
console.log(doubled); // [10, 10, 10]

const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2]

const sum = numbers.reduce((acc, num) => acc + num, 0);

//

function mapValues(obj, fn) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, fn(value)])
  );
}

const double = (x) => x * 2;

console.log(mapValues({ a: 1, b: 2, c: 3 }, double)); // { a: 2, b: 4, c: 6 }
console.log(mapValues({ x: 4, y: 5 }, (x) => x + 1)); // { x: 5, y: 6 }
