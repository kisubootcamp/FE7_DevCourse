const person = {
  name: "Kim",
};

//속성 설명자: defineProperty. 실무에서는 거의 사용하지 않음.
//value: 값
//writable: false(수정 불가능), true(수정 가능)
//enumerable: false(열거 가능 속성에 안보임, 기본), true(보임)
//configurabl: false(속성 삭제 불가), true(삭제 가능)

//하나만 정의
Object.defineProperty(person, "age", {
  value: 20,
  enumerable: true,
  writable: true,
  configurable: false,
});

//여러개 정의
Object.defineProperties(person, {
  job: {
    value: "developer",
    enumerable: true,
  },
  salary: {
    value: 5000,
    enumerable: true,
  },
});

person.age = 50;
delete person.age;
console.log(person);
console.log(person.age);
