// 6. 구조분해할당(비구조화할당)
// 6.1 alias
const { name: userName, age: userAge } = { name: "kim", age: 20 };
console.log(userName);
console.log(userAge);

const [a, b] = [10, 20];
console.log(a);
console.log(b);

// 응용

const {
  name,
  age,
  address: { city: ucity }, // 중첩 객체인 경우 :를 쓰더라도 구조분해할당이 됨
  food: [apple, banana],
} = {
  name: "kim",
  age: 20,
  address: { city: "seoul" },
  food: ["apple", "banana"],
};

console.log(name);
console.log(age);
console.log(ucity);
console.log(apple);
console.log(banana);

const [
  { name: firstName, age: firstAge },
  { name: secondName, age: secondAge },
] = [
  { name: "kim", age: 20 },
  { name: "park", age: 30 },
];
console.log(firstName, firstAge);
console.log(secondName, secondAge);

const {
  members: [{ name: fName, age: fAge }, { name: sName, age: sAge }],
} = {
  members: [
    { name: "kim", age: 20 },
    { name: "park", age: 30 },
  ],
};

function userInfo({ name = "kim", age = 20 }) {
  console.log(name, age);
}
userInfo({ name: "kim", age: 20 });

function sum(a = 10, b = 20) {
  return a + b;
}
console.log(sum());
