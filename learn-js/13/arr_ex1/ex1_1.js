// 배열 내장 객체 연습문제
//1

const students = [
  { name: "Alice", age: 21, gender: "male", height: 170 },
  { name: "Bob", age: 19, gender: "male", height: 165 },
  { name: "Charlie", age: 20, gender: "male", height: 175 },
  { name: "David", age: 22, gender: "male", height: 180 },
  { name: "Eve", age: 17, gender: "female", height: 160 },
  { name: "Frank", age: 18, gender: "male", height: 175 },
  { name: "Grace", age: 21, gender: "female", height: 165 },
  { name: "Henry", age: 19, gender: "male", height: 170 },
  { name: "Ivy", age: 14, gender: "female", height: 155 },
  { name: "Jack", age: 22, gender: "male", height: 185 },
];

// 1. 키가 185인 학생 1명 찾기
console.log(students.find((student) => student.height >= 185));
console.log(students.filter((obj) => obj.height === 185));
//2. 나이가 20살 이상인 학생들 찾기
console.log(students.filter((obj) => obj.age >= 20));
//3. 키가 165 이하인 학생들이 있는지 찾아서 true, false로 반환하기
console.log(students.some((obj) => obj.height <= 165));
//4. 학생들이 모두 10살 이상인지 확인해서 true, false 반환하기
console.log(students.every((obj) => obj.age >= 10));
//5. 학생들의 평균 연령 구하기
console.log(
  students.reduce((hap, obj) => (hap += obj.age), 0) / students.length
);
//6. 남학생들의 평균 연령 구하기
const male = students.filter((obj) => obj.gender === "male");
console.log(male.reduce((hap, obj) => (hap += obj.age), 0) / male.length);
//7. 야학생들의 이름만 따로 추출해서 새로운 배열 만들기
const female = students.filter((obj) => obj.gender === "female");
const femaleStudent = female.map((v) => v.name);
console.log(femaleStudent);
//8. 여학생들 중 나이가 가장 어린 학생 찾기
const lessFemale = female.sort((a, b) => a.age - b.age);
console.log(lessFemale[0]);
