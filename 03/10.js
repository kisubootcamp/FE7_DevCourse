const arr = ["banana", "apple", "orange"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

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

// for in 에서는 점 표기법으로는 값을 가져올 수 없고 대괄호 표현법을 사용해야 함
console.log("===");
for (let key in obj) {
  console.log(obj[key]);
}

console.log("===");
for (let value of arr) {
  console.log(value);
}
