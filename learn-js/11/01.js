// 객체
// 키과 값으로 구성된 속성(property)의 집합
const obj = {
  name: "Lee",
};

// 객체를 정의하는 방법
// 1. 리터럴 방식 (객체 리터럴)
const obj2 = {
  name: "Lee",
  age: 30,
  greet() {
    return `Hello, ${this.name}`;
  },
};

// 2. Object 생성자 함수
const obj3 = new Object();
obj2.name = "Kim";
obj2.age = 25;
obj2.greet = function () {
  return `Hello, ${this.name}`;
};

// 생성자 함수
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    return `Hello, ${this.name}`;
  };
}

// Object.create() 메서드
const obj4 = Object.create(obj2);

//

// 프로퍼티 접근과 조작

// 1. 점 표기법 (Dot Notation)
user.name = "John"; // 프로퍼티 값 변경

// 2. 대괄호 표기법 (Bracket Notation)
user["age"] = 30; // 프로퍼티 값 변경

// 3. 조작
// 3-1. 수정 (다시 할당)
user.name = "Jane"; // 프로퍼티 값 수정
// 3-2. 추가
user.country = "USA"; // 새로운 프로퍼티 추가
// 3-3. 삭제 (동작 삭제)
delete user.age; // 프로퍼티 삭제
// 없는 속성을 삭제해도 에러가 발생하지 않는다.
