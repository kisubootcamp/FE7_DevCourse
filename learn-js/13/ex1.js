// 배열 내장 객체
// 연습 문제

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
const taller = students.find((students) => students.height === 185);
console.log(taller);

//2. 나이가 20살 이상인 학생들 찾기
const twenties = students.filter((students) => students.age >= 20);
console.log(twenties);

//3. 키가 165 이하인 학생들이 있는지 찾아서 true, false로 반환하기
const smaller = students.some((students) => students.height <= 165);
console.log(smaller);

//4. 학생들이 모두 10살 이상인지 확인해서 true, false 반환하기
const teenager = students.every((students) => students.age >= 10);
console.log(teenager);

//5. 학생들의 평균 연령 구하기 **
// reduce 이해
const averAge = students.reduce((acc, student) => acc+student.age, 0);
//console.log(averAge);
console.log(averAge/students.length);

//6. 남학생들의 평균 연령 구하기 *
const boysAverAge = students
.filter((students) => students.gender === "male")
.reduce((acc, student) => acc+student.age, 0);
console.log(boysAverAge/students.length);


//7. 여학생들의 이름만 따로 추출해서 새로운 배열 만들기 *
// 배열 안의 객체 안의 속성 하나만(이름) 추출 => map() ? :: 새 배열을 만들 때 사용
const girls = students
.filter((students) => students.gender === "female")
.map(students => students.name);
console.log(girls);

//8. 여학생들 중 나이가 가장 어린 학생 찾기 **
// 가장 어린? => sort()
const youngGirl = students
.filter((students) => students.gender === "female")
.sort((a,b) => a.age - b.age)[0];
console.log(youngGirl);