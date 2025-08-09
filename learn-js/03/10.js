const arr = ["banana", "apple", "orange"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr.length);

const obj = { name: "철수", age: 20, key: "h1" };
console.log(obj.name);
console.log(obj.age);

console.log("===");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("====");
for (const index in arr) {
  console.log(arr[index]);
}

console.log("====");
for (const key in obj) {
  console.log(obj[key]);
}

console.log("====");
for (const value of arr) {
  console.log(value);
}
