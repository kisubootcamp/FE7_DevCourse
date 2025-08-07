const arr = ["banana", "apple", "orange"];
console.log();

const obj = { name: "철수", age: 20 };

console.log(obj.name); // 객체의 속성에 접근
console.log(obj["age"]); // 객체의 속성에 접근 (대괄호 표기법)

for (let index in arr) {
  console.log(index);
}

for (let key in obj) {
  console.log(obj[key]);
}
