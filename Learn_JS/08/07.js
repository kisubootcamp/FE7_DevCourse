// function Person(name){
//     this.name = name;
// }

// Person.prototype.getName = function () {
//     return `${this.name}`;
// }

// const pr1 = new Person("kim");
// console.log(pr1.getName());

function Animal(name){
    this.name = name;
}

Animal.prototype.speak = function () {
    return `${this.name} make a sound`;
}

const an = new Animal("cat");
console.log(an.name);
console.log(an.speak());

function Dog(name, age){
    this.name = name;
    this.age = age;
}

// 새로운 객체를 만들 것 인데, 그 객체의 프로토타입을 Animal.prototype으로 함
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
    return `${this.name} barks!`;
}

// Dog.prototype.speak = function () {
//     return `${this.name} make a sound`;
// }



const dg = new Dog("puppy", 20);
console.log(dg.name);
console.log(dg.age);
console.log(dg.bark());
console.log(dg.speak());
