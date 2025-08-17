const arr = ['banana', 'apple', 'orange'];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr.length);

const obj = { name: '철수', age: 20 };
console.log(obj.name);
console.log(obj.age);

console.log('===');
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log('====');
for (const index in arr) {
  console.log(arr[index]);
}

// 객체 반복문은 for in
console.log('====');
for (const key in obj) {
  console.log(obj[key]);
}

// 배열 반복문은 for of
console.log('====');
for (const value of arr) {
  console.log(value);
}
