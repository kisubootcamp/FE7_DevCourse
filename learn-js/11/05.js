// 1.8

const person = {
  name : "kim",
};

//defineProperty :: 실무에서는 잘 안 씀

// value
// writable -> false 수정 불가능, true 가능
// enumerable -> false(기본값) 열거 가능 속성에 안보임, true 보임
// configuralbe -> 속성의 삭제 불가능하게 만듦
Object.defineProperty(person, "age", {
  value: 20,
  enumerable: true,
  writable: true,
  configurable: false,
});

person.age = 50;
delete person.age;

// 여러 개 정의
Object.defineProperties(person, {
  job: {
    value: "developer",
  },
  salary: {
    value: 5000,
  },
});