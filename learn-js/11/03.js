//구조 분해 할당(비구조화할당)

// const person = {
//   name:"Kim",
//   age: 20,
// };

// console.log(person.name);
// console.log(person.age);

//속성 값을 동일하게 작성하여야 함.
const {
  name: userName,
  age,
  addr: { city: newCity }, //중첩 구조분해 할당 시 내부 속성 치환이 가능. 단, addr은 안된다!
  food: [f1, f2], //속성이 배열일 경우에도 중첩 구조분해 할당 가능.
} = {
  name: "Kim",
  age: 20,
  addr: { city: "seoul" }, //치환 불가.
  food: ["apple", "banana"],
};

//변수처럼 접근 가능
console.log(userName); //치환(alias) 문법
console.log(age);
console.log(newCity);
console.log(f1, f2);

//배열은 식별자에 대한 이름 규칙이 없어 자리수만 맞춰주면 된다.
const [a, b] = [10, 20];
console.log(a);
console.log(b);

const [firstUser, secondUser] = [
  { name: "Kim", age: 20 },
  { name: "park", age: 30 },
];

console.log(name, age, secondUser); //같은 이름이라 오류

//구조분해할당
const [
  { name: firstName, age: firstAge },
  { name: secondName, age: secondAge },
] = [
  { name: "Kim", age: 20 },
  { name: "park", age: 30 },
];
console.log(firstName, firstAge, secondName, secondAge);

//구조분해할당
const {
  mambers: [{ name: fName, age: fAge }, { name: sName, age: sAge }],
} = {
  mambers: [
    { name: "Kim", age: 20 },
    { name: "park", age: 30 },
  ],
};
console.log(fName, fAge, sName, sAge);

//함수의 매개변수도 구조분해할당
function userInfo({ name, age }) {
  console.log(name, age);
}
userInfo({ name: "Kim", age: 20 });

function userInfo({ name = "Kim", age = 20 }) {
  console.log(name, age);
}
//userInfo(); //오류.
userInfo({}); //비어있는 객체라도 넘겨주어야 함.

function sum(a = 2, b = 3) {
  return a + b;
}
console.log(sum());
