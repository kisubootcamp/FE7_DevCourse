console.log(typeof {}); // object
console.log(Array.isArray("[]")); // object
console.log(typeof null); // object

console.log("foo"[0]); 
console.log("foo"[1]); 
console.log("foo"[2]); 

// 1. 표준 내장 메서드
// 1.1 파괴적 메서드
// 1.1.1 메서드의 실행 결과과 원본 데이터를 변형시킬 떄

// 1.2 비파괴적 메서드
// 1.2.1 메서드의 실행 결과가 원본 데이터를 변경 시키지 않을 때

// const fruits = ["사과", "바나나"];
// fruits.unshift("멜론");
// fruits.push("오렌지", "멜론", "망고");
// fruits.push("멜론");
// fruits.push("망고");

// console.log(fruits.pop());
// console.log(fruits);

for(let i = 0; i < fruits.length; i++){
    console.log(fruits.pop());
    console.log(fruits.shift());
}

// const fruits = ['사과', '바나나', '오렌지'];
// const citrus = fruits.slice(1, 3);
// console.log(citrus); // ['바나나', '오렌지']
// console.log(fruits); 

const fruits = ['사과', '바나나', '오렌지'];
fruits.forEach((fruit) => {
  console.log(fruit); // '사과', '바나나', '오렌지'
});

const numbers = [1, 2, 3];
const doubled = numbers.map(v => v * 2);
console.log(doubled); // [2, 4, 6]

const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
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
const sum = arr.reduce((prev, cur) => prev * cur);
console.log("총 합:" + sum);

const basket = [
  { id: 1, name: "귀저기", price: 1000 },
  { id: 2, name: "분유", price: 2000 },
  { id: 3, name: "젖병", price: 3000 },
];

const totalPrice = basket.reduce((prev, cur) => prev + cur.price, 0);
console.log(totalPrice.toLocaleString());

const numbers = [1, 2, 2, 3, 4];
const uniqueNumbers = numbers.reduce((prev, cur) => {
  if (!prev.includes(cur)) prev.push(cur);
  return prev;
}, []);
console.log(uniqueNumbers);

const numbers = [1, 2, 3, 4];
const found = numbers.find(num => num > 2);
console.log(found); // 3

// Hello
const str = "Hello";
console.log(str.split("").reverse().join(""));

const numbers = [4, 2, 15, 1, 3];
// numbers.sort((a, b) => a - b);
numbers.sort(function(a, b){
    // console.log(a, b);
    return a === b ? 0 : a < b ? -1 : 1;
})
console.log(numbers);

let items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// value 기준으로 정렬
items.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

// name 기준으로 정렬
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // 이름이 같을 경우
  return 0;
});