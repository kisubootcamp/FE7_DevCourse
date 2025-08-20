// 6. 구조분해할당(비구조화할당)
// 6.1 alias(치환)

// 기본
const { name: userName, userAge } = { name: 'lee', userAge: 20 };
// console.log(userName);
// console.log(userAge);

const [a, b] = [10, 20];
// console.log(a);
// console.log(b);

// 응용
const {
  name: uname,
  age: uage,
  address: { city }, //중첩 구조분해 할당
  food: [apple, banana],
} = {
  name: 'kim',
  age: 20,
  address: { city: 'seoul' },
  food: ['apple', 'banana'],
};

// console.log(uname);
// console.log(uage);
// console.log(city);
// console.log(apple, banana);

const [{ name: firstName, age: firstAge }, { name, age }] = [
  { name: 'kim', age: 20 },
  { name: 'park', age: 30 },
];

console.log(firstName, firstAge, name, age);

const {
  members: [{ name: fName, age: fAge }, { name: sName, age: sAge }],
} = {
  members: [
    { name: 'kim', age: 20 },
    { name: 'park', age: 30 },
  ],
};

console.log(fName, fAge, sName, sAge);

function userInfo({ name = 'choi', age = 60 }) {
  console.log(name, age);
}
// userInfo({ name: 'kim', age: 20 });
userInfo({});

function sum(a = 1, b = 2) {
  return a + b;
}
console.log(sum());
