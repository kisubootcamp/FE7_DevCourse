// 1.표준 내장 메서드
// 1.1 파괴적 메서드
// 1.1.1 메서드의 실행 결과가 원본 데이터를 변경시킬 때

// const fruits = ["사과", "바나나"];
// console.log(fruits.pop());
// console.log(fruits);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits.shift());
// }

// 1.2 비파괴적 메서드
// 1.2.1 메서드의 실행 결과가 원본 데이터를 변경 시키지 않을 때

// 누산 (계산이 누적되어야 할 때)
// const bascket = [
//   { id: 1, name: "기저귀", price: 1000 },
//   { id: 2, name: "분유", price: 2000 },
//   { id: 3, name: "젖병", price: 3000 },
// ];

// const numbers = [1, 2, 3, 4];
// const sum = bascket.reduce((acc, cur) => acc + cur.price, 0);
// console.log(sum);

const numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  if (a < b) return -1;
  else if (a > b) return 1;
  else return 0;
});

numbers.sort((a, b) => a - b);
