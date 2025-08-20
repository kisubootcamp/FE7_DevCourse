// 6. 구조분해할당(비구조화할당)
// 객체는 {}
// 객체는 이 키 값과 받는 값이 이름이 바뀌면 안됨
// 기본
// const { name, age } = { name: "kim", age: 20 };
console.log(name);
console.log(age);

// 6.1 받을 변수 이름을 다르게 하고 싶으면 alias 사용
// const { name: userName, age } = { name: "kim", age: 20 };
console.log(userName);

// 배열은 []
// 얘는 변수 이름 상관 X
const [a, b] = [10, 20];
console.log(a);
console.log(b);

// 응용
// 중첩된 객체 구조분해할당
//1
// const {
//   name,
//   age,
//   address: { city: ucity }, // adress는 못 바꾸지만 안에 있는 애는 바꿀 수 있음
//   food: [apple, banana], // 객체 내 배열도 이렇게 열어서 각각 이름 치환 가능
// } = {
//   name: "kim",
//   age: 20,
//   address: { city: "seoul" },
//   food: ["apple", "banana"],
// };

//2

const [
  { name: firstName, age: firstAge },
  { name: secondName, age: seconAge },
] = [
  { name: "kim", age: 20 },
  { name: "park", age: 30 },
];

//3
const {
  members: [{ name: fname, age: fage }, { name: sname, age: sage }],
} = {
  members: [
    { name: "kim", age: 20 },
    { name: "park", age: 30 },
  ],
};

// 함수가 받는 매개변수도 구조분해할당 가능
function userInfo({ name = "kim", age = 20 }) {
  console.log(name, age);
}
// userInfo({ name: "kim", age: 20 });
userInfo({}); // {}이거 안 보내면 에러 생김

function sum(a = 10, b = 20) {
  return a + b;
}
console.log(sum());
