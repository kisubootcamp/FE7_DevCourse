//전부 object
console.log(typeof []);
console.log(typeof {});
console.log(typeof null);

console.log(Array.isArray([])); //true
console.log(Array.isArray({}));

console.log("ming"[0]); //유사배열객체

//표준 내장 메서드
//파괴적인 메서드: 메서드의 실행 결과가 원본 데이터를 변경시킬 때
//비파괴적 메서드: 메서드의 실행 결과가 원본 데이터를 변경시키지 않을 때

const fruits = ["사과", "바나나"];
console.log(fruits.pop());
console.log(fruits);

//for문 실행으로 인해 원본 데이터의 손상.
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits.shift());
}

//slice
const fruits2 = ["사과", "바나나", "오렌지"];
const citrus = fruits2.slice(1, 3); //start부터 end-1까지
console.log(citrus); // ['바나나', '오렌지']

//unshift
const fruits3 = ["바나나", "오렌지"];
fruits3.unshift("사과");
console.log(fruits3); // ['사과', '바나나', '오렌지']

//splice
const fruits4 = ["사과", "바나나", "오렌지"];
fruits4.splice(1, 1, "포도"); // 인덱스 1에서 1개 요소를 '포도'로 대체
console.log(fruits4); // ['사과', '포도', '오렌지']

//forEach
const fruits5 = ["사과", "바나나", "오렌지"];
fruits5.forEach((fruit) => {
  console.log(fruit); // '사과', '바나나', '오렌지'
});

//map
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]

//filter 각각의 값이 전달
const numbers1 = [1, 2, 3, 4, 5];
const evens = numbers1.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4]

//reduce: 배열의 각 요소에 대해 함수를 실행하여 단일 값을 반환합니다.
const numbers2 = [1, 2, 3, 4];
const sum = numbers2.reduce((acc, num) => acc + num, 0); //누적 값과 순회로 얻는 값
console.log(sum); // 10

// 1. 초깃값이 없을 때
// prev -> 배열의 0번 인덱스 , cur -> 배열에 1번 인덱스 값이 들어감
// 1번 인덱스부터 돕니다.
// 빈배열은 에러가 떨어진다.

// 2. 초깃값이 있을 때,
// prev -> 초깃값, cur-> 0번 인덱스의 값, 0번 인덱스 값이 돌아감(순회)
// 빈배열은 초깃값을 가진다.

// 1. 배열 오소의 합계 또는 곱셈을 구할 때
const arr = [1, 2, 3, 4];
const sum1 = arr.reduce((prev, cur) => prev * cur);
console.log("총 합:" + sum1);

const basket = [
  { id: 1, name: "귀저기", price: 1000 },
  { id: 2, name: "분유", price: 2000 },
  { id: 3, name: "젖병", price: 3000 },
];

const totalPrice = basket.reduce((prev, cur) => prev + cur.price, 0);
console.log(totalPrice.toLocaleString());

const numbers3 = [1, 2, 2, 3, 4];
const uniqueNumbers = numbers.reduce((prev, cur) => {
  if (!prev.includes(cur)) prev.push(cur);
  return prev;
}, []);
console.log(uniqueNumbers);

//find: 주어진 함수를 만족하는 첫 번째 요소를 반환합니다. 없으면 undefined를 반환합니다.
const numbers4 = [1, 2, 3, 4];
const found = numbers4.find((num) => num > 2);
console.log(found); // 3

//some: 배열의 일부 요소가 주어진 조건을 만족하는지 확인합니다. 만족하는 요소가 있으면 true, 없으면 false를 반환합니다.
const numbers5 = [1, 2, 3, 4];
const hasEven = numbers5.some((num) => num % 2 === 0);
console.log(hasEven); // true
