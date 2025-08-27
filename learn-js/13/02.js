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
const found = students.find((student) => student.height === 185);
console.log(found);

//2. 나이가 20살 이상인 학생들 찾기
const found2 = students.filter((student) => student.age > 20);
console.log(found2);

//3. 키가 165 이하인 학생들이 있는지 찾아서 true, false로 반환하기
const found3 = students.find((student) => student.height <= 165);
console.log(found3 ? true : false);

//4. 학생들이 모두 10살 이상인지 확인해서 true, false 반환하기
const found4 = students.every((student) => student.age >= 10);
console.log(found4);

//5. 학생들의 평균 연령 구하기
const found5 = students.reduce((sum, student) => sum + student.age, 0);
console.log(found5 / students.length);

//6. 남학생들의 평균 연령 구하기
const found6 = students
  .filter((student) => student.gender === "male")
  .reduce((sum, student) => sum + student.age, 0);
console.log(found6 / students.length);

//7. 여학생들의 이름만 따로 추출해서 새로운 배열 만들기
const found7 = students.filter((student) => student.gender === "female");
const result = [];
found7.filter((student) => result.push(student.name));
// map을 사용하면 더 쉬움
//found7.map((v)=>v.name);
console.log(result);

//8. 여학생들 중 나이가 가장 어린 학생 찾기
let maxAge = [];
const found8 = students
  .filter((student) => student.gender === "female")
  .sort(function (a, b) {
    if (a.age > b.age) {
      return 1;
    }
    if (a.age < b.age) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
console.log(found8[0]);
