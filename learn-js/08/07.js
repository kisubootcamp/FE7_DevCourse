// (3) 상속
// ( 다음 시간에 다시 또 학습 하겠다 )

// animal >> dog (포함됨), 따라서 animal(상위) - dog(하위) 로 상속 부여 가능
// prototype 객체 속성 이용

// .speak를 하나 더 쓰는 대신에, .create 메서드를 사용함

function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name} makes a sound`;
};

const an = new Animal("cat");
console.log(an.name);
console.log(an.speak());

function Dog(name, age) {
  this.name = name;
  this.age = age;
}
/*
Dog.prototype.speak = function(){
    return `${this.name} makes a sound`;
}; 
*/
Dog.prototype = Object.create(Animal.prototype);
// Animal.prototype을 바탕으로 한 새로운 객체로 재정의
// 원래는 object() prototype으로 갈 것을 경로를 바꿔 Animal() prototype로 보냄
Dog.prototype.constructor = Dog;

// 원래 dog가 갖는 프로토타입 객체

Dog.prototype.bark = function () {
  return `${this.name} barks!`;
};

const dg = new Dog("puppy", 2);

console.log(dg.name);
console.log(dg.age);
console.log(dg.bark());
console.log(dg.speak()); // good work
