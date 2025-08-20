// 6. 구조분해할당(비구조화할당)

//객체 구조분해
const { name, age } = { name: "kim", age: 20 }; // 객체에서 name과 age라는 속성을 꺼내줘! 라는 명령
console.log(name);
console.log(age);
// alias (치환)
const { name: userName, age: userAge } = { name: "kim", age: 20 }; // 객체에서 name과 age라는 속성을 꺼내줘! 라는 명령
console.log(userName);
console.log(userAge);

// 배열 구조분해
const [a, b] = [10, 20]; // 첫번째 요소를 a에, 두번째 요소를 b에 할당해! 라는 명령
console.log(a);
console.log(b);

// 중첩 구조분해할당
const {
  name: uname,
  age: uage,
  address: { city: ucity }, // 중첩 구조분해할당
} = {
  name: "kim",
  age: 20,
  address: { city: "seoul" },
  food: ["apple", "banana"],
};

console.log(ucity);

//////// 응용 /////////////////
const [
  { name: firstName, age: firstAge },
  { name: secondName, age: secondAge },
] = [
  { name: "kim", age: 20 },
  { name: "park", age: 30 },
];
console.log(firstName, firstAge, secondName, secondAge);

const {
  members: [{ name: fName, age: fAge }, { name: sName, age: sAge }],
} = {
  members: [
    { name: "kim", age: 20 },
    { name: "park", age: 30 },
  ],
};
console.log(firstName, firstAge, secondName, secondAge);
