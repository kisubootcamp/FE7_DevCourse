function Person(name) {
  this.name = name;
}

// 함수 선언식: Person의 this를 가르킨다
Person.prototype.getName = function () {
  return `${this.name}`;
};

// 화살표 함수: 내부적으로 this가 없다 window를 가르킨다
// Person.prototype.getName = () => {
//   return `${this.name}`;
// };

// new라는 키워드의 의해 새로운 객체(인스턴스)가 생성된다.
const pr1 = new Person('LEE');
// console.log(pr1.getName());

function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

function Dog(name, age) {
  this.name = name;
  this.age = age;
}

// 새로운 객체를 만들 것 이지만, 그 객체의 프로토 타입을 Animal.prototype으로 하겠다.
// 프로토타입도 누군가의 인스턴스 객체,
// 초반에는 Object 객체의 인스턴스로 되어 있다.
// Animal 프로토타입을 상속받으면서 새롭게 객체를 만듬(?) 변경(?)
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  return `${this.name} barks!`;
};

const dg = new Dog('puppy', 20);
console.log(dg.speak());
