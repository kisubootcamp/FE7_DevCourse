const arr = ["banana", "apple", "orange"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr.length);

const obj = { name: "철수", age: 20 };
console.log(obj.name);
console.log(obj.age);

console.log("===");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("===");
for (let index in arr) {
  console.log(arr[index]);
}

console.log("===");
for (let key in obj) {
  console.log(obj[key]);
}

console.log("===");
for (let value of arr) {
  console.log(value);
}
// 배열을 반복한다는 점에서는 for of가 좋음 //배열의 요소에 직접 접근할 수 있기에
// 객체는 for in
