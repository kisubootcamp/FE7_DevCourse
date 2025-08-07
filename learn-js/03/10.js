// var, let, const
// var - ES5
// let, const - ES6
// 블록 범위 스코프(영향 범위, 범위)

{
    let num = 10;
}

// console.log(num); -> 에러 발생함

{
    var num = 10;
}
console.log(num);

const arr = ["banana", "apple", "orange"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr.length);

const obj = { name : "철수", age : 20};
console.log(obj.name);
console.log(obj.age);

console.log("===");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("===");
for (const index in arr) {
    console.log(arr[index]);
}
console.log("===");
for (const key in obj) {
    console.log(key);
}

console.log("===")
for (const value of obj) {
    console.log(value);
}