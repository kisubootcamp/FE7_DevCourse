/*

객체를 만들 때, 여러 개를 만들었는데 속성 명이 바뀐다면?
=> 함수를 이용해서 객체를 만들어낼 수 있음
=> 생성자 함수

*/

function Person() {
  this.name = "name"; // this는 해당 객체 Person을 가리킴 붙이지 않으면 객체 속성을 반환하지 않음
  this.age = 20;
}

const user1 = Person(); // 인스턴스 -> 생성자 함수를 이용해 생성된 객체
console.log(user1); // undefined
// 하지만 Person에 new 키워드를 붙이면 Person {}이 뜸
// new 키워드를 붙이면, 함수의 return이 그 객체가 됨
// 이런 객체를 생성하는 함수는 일반적인 함수와 구분하기 위해서 대문자로 시작함

// 생성자 함수의 장점
// 유사한 객체를 찍어낼 수 있음 => 유지보수가 쉬워짐
// new 키워드가 없으면 일반 함수로 실행

function Car() {
  this.name = "Benz";
}

const car1 = new Car();
const car2 = new Car();
// 전부 name: "Benz" 속성을 가짐
// car1과 car2는 독립적으로 존재

function Car2(name) {
  this.name = name;
}

const car3 = new Car2("BMW");
