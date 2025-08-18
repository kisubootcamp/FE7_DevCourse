// 1.2 일반 함수의 this
// 1.2.1 자신을 호출한 객체. 함수를 어떻게, 누가 호출하냐에 따라서 this가 달라짐
// 1.3 화살표 함수의 this
// 1.3.1 자신이 속한 상위 스코프의 this를 참조함
// 1.3.1.1 Person 함수 실행 컨텍스트 내부에 정의가 된 것.

// Class -> Sugar SynTax(설탕 문법, 문법이 마치 설탕을 뿌린 것처럼 달콤하다.)
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getInfo = function () {
  return `${this.name}, ${this.age}`;
};

function Developer(name, age, skill) {
  //
  Person.call(this, name, age);
  this.skill = skill;
}

// Person.prototype 참조해서 새로운 객체를 만든다.
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

const dev1 = new Developer('kim', 20, 'javascript');
console.dir(dev1.getInfo());
console.dir(dev1.hasOwnProperty('name'));

// const dev1 = new Developer('kim', 20, 'javascript');
// console.dir(dev1.hasOwnProperty('name'));
// console.dir(dev1.getInfo());
