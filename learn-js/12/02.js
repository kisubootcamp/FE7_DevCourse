console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof null); // object

console.log(Array.isArray("[]")); // false

// 1. 표준 내장 메서드
// 1.1 파괴적 메서드
// 1.1.1 메서드의 실행결과가 원본 데이터를 변경시킬 때 ex) push()

// 1.2 비파괴적 메서드
// 1.2.1 메서드의 실행결과가 원본 데이터를 변경시키지 않을 때

const array1 = [1, 30, 4, 21, 100000]; // 그냥 sort() 하면 이상하게 됨
array1.sort((a, b) => {
	if (a < b) return -1;
	else if (a > b) return 1;
	else return 0;
});
console.log(array1);

// mdn에 compare function 제대로 나와있음메

array1.sort((a, b) => a - b); // 오름차순
array1.sort((a, b) => b - a); // 내림차순

// 객체도 정렬 가능쓰
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

// name 기준으로 정렬
items.sort(function (a, b) {
  if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
    return 1;
  }
  if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

console.log(items)