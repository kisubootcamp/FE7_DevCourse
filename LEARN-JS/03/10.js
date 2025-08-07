// var, let, const
// var - ES5

// let, const - ES6
// 블록 범위 스코프 (영향 범위, 범위)

// {
//   let num = 10;
// }

// console.log(num); // error

const arr = ['banana', 'apple', 'orange'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr.length);

const obj = { name: '철수', age: 20 };
console.log(obj.name);
console.log(obj.age);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log('===========');
// index를 반환한다.
for (let index in arr) {
  console.log(arr[index]);
}

console.log('===========');
for (let key in obj) {
  // obj.key X
  console.log(obj[key]);
}

console.log('===========');
// 값을 반환한다.
// 재할당이 일어나는게 아니라
// 그때 그때 마다 초기화 한다
// 반복이 한 번 수행되서 돌아올때 메모리가 재정의
for (const value of arr) {
  console.log(value);
}
