// 6. 구조분해할당(비구조화할당)
// const person = { name: "kim", age: 20 };
// console.log(person.name);
// console.log(person.age);

// 6.1 alias(치환) name: userName
// 기본
const { name: userName, age: userAge } = { name: "kim", age: 20 };
console.log(userName);
console.log(userAge);

const [kim, park] = [10, 20];
console.log(kim);
console.log(park);

// 응용1
const {
  name: uname,
  age: uage,
  address: { city: ucity }, // 중첩 구조분해 할당
  food: [apple, banana],
} = {
  name: "kim",
  age: 20,
  address: { city: "seoul" },
  food: ["apple", "banana"],
};
console.log(uname);
console.log(uage);
console.log(ucity);
console.log(apple, banana);

// 응용2
const [
  { name: firstName, age: firstAge },
  { name: secondName, age: secondAge },
] = [
  { name: "kim", age: 20 },
  { name: "park", age: 30 },
];
console.log(firstName, firstAge, secondName, secondAge);

const {
  members: [{ name: fname, age: fage }, { name: sname, age: sage }],
} = {
  members: [
    { name: "kim", age: 20 },
    { name: "park", age: 30 },
  ],
};
console.log(fname, fage, sname, sage);

function userInfo({ name = "kim", age = 20 }) {
  console.log(name, age);
}
userInfo({});

function sum(a = 10, b = 20) {
  return a + b;
}
console.log(sum());
