// var, let, const
// var - ES5
// let, const = ES6
// // 블록 스코프(영향 범위, 범위)

// {
//     var num = 10;
// }

// console.log(num);

const arr = ["banana", "apple", "orange"];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

const obj = {name : "철수", age : 20};
console.log(obj.name);
console.log(obj.age);

console.log("===");
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

console.log("===");
for(let index in arr){
    console.log(arr[index]);
}

console.log("===");
for(let key in obj){
    console.log(obj[key]);
}

console.log("===");
for(let value of arr){
    console.log(value);
}

