// 표준 내장 메서드
// 1.1 파괴적 메서드
// 1.1.1 메서드의 실행 결과가 원본 데이터를 변경시킬 때
// ex) push(), pop(), shift(), unshift(), splice()

// 1.2 비파괴적 메서드
// 1.2.1 메서드의 실행 결과가 원본 데이터를 변경시키지 않을 때
// ex) slice(), map(), filter()

console.log(typeof {}); // object
console.log(typeof []); // object
console.log(Array.isArray([])); // true
console.log(typeof null); // object

// String은 유사 배열 객체이다
console.log("foo"[0]); // f
console.log("foo"[1]); // o
console.log("foo"[2]); // o

const fruits = ["사과", "바나나", "오렌지"];

fruits.push("멜론", "망고");
// console.log(fruits.pop());
// console.log(fruits);

for (let i = 0; i < fruits.length; i++) {
    // console.log(fruits.shift());
    // fruits.push("d"); // 무한 루프. fruits의 length를 계속 키우므로.
}


const numbers = [1, 2, 3];
const doubled = numbers.map((v) => v * 2);
console.log(doubled); // [2, 4, 6]

const numbers2 = [1, 2, 3, 4, 5];
const evens = numbers2.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]


// 누산 (계산이 누적되어야 할 때)
const numbers3 = [1, 2, 3, 4];
const sum = numbers3.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10