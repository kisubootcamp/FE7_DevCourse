// 6. 구조분해할당 (비구조화할당)
// 6.1 alias
const { name: userName, age: userAge } = { name: 'kim', age: 20 }; // 배열은 반드시 키와 똑같은 값으로 구조분해할당할 수 있음.
console.log(userName);
console.log(userAge);

// 응용
const {
  name: uname,
  age: uage,
  adress: { city: ucity },
  food: [apple, banana],
} = {
  name: 'kim',
  age: 20,
  adress: { city: 'seoul' },
  food: ['apple', 'banana'],
};

console.log(uname);
console.log(uage);
console.log(ucity);
console.log(apple, banana);

const [a, b] = [10, 20];
console.log(a);
console.log(b);

const [
  { name: firstName, age: firstAge },
  { name: secondName, age: secondAge },
] = [
  { name: 'kim', age: 20 },
  { name: 'park', age: 30 },
];

console.log(firstName, firstAge, secondName, secondAge);

const {
  members: [{ name: fname, age: fage }, { name: sname, age: sage }],
} = {
  members: [
    { name: 'kim', age: 20 },
    { name: 'park', age: 30 },
  ],
};
console.log(fname, fage, sname, sage);

function userInfo({ name = 'kim', age = 20 }) {
  console.log(name, age);
}
// userInfo({ name: 'kim', age: 20 });
userInfo({});

function sum(a = 10, b = 20) {
  return a + b;
}
