const students = [
  { name: 'Alice', age: 21, gender: 'male', height: 170 },
  { name: 'Bob', age: 19, gender: 'male', height: 165 },
  { name: 'Charlie', age: 20, gender: 'male', height: 175 },
  { name: 'David', age: 22, gender: 'male', height: 180 },
  { name: 'Eve', age: 17, gender: 'female', height: 160 },
  { name: 'Frank', age: 18, gender: 'male', height: 175 },
  { name: 'Grace', age: 21, gender: 'female', height: 165 },
  { name: 'Henry', age: 19, gender: 'male', height: 170 },
  { name: 'Ivy', age: 14, gender: 'female', height: 155 },
  { name: 'Jack', age: 22, gender: 'male', height: 185 },
];

// 1. 키가 185인 학생 1명 찾기
{
  const student = students.find((student) => student.height === 185);
  console.log(student.name);
}
//2. 나이가 20살 이상인 학생들 찾기
{
  const student = students.filter((student) => student.age >= 20);
  console.log(student);
}
//3. 키가 165 이하인 학생들이 있는지 찾아서 true, false로 반환하기
{
  console.log(students.some((student) => student.height <= 165));
}
//4. 학생들이 모두 10살 이상인지 확인해서 true, false 반환하기
console.log(students.every((student) => student.age >= 10));
//5. 학생들의 평균 연령 구하기
console.log(
  students.reduce((acc, student) => acc + student.age, 0) / students.length
);
//6. 남학생들의 평균 연령 구하기
console.log(
  students
    .filter((man) => man.gender === 'male')
    .reduce((avr, student) => avr + student.age, 0) /
    students.filter((man) => man.gender === 'male').length
);
//7. 여학생들의 이름만 따로 추출해서 새로운 배열 만들기
console.log(
  students.filter((woman) => woman.gender === 'female').map((v) => v.name)
);
//8. 여학생들 중 나이가 가장 어린 학생 찾기
console.log(
  students
    .filter((woman) => woman.gender === 'female')
    .sort((a, b) => a.age - b.age)[0].name
);
