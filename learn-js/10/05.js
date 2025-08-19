//부모 클래스(상송 함)
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, ${this.name}`;
  }
}

//자식 클래스(상속 받음)
class Developer extends Person {
  constructor(name, age, skill) {
    super(name, age); //부모의 생성자를 호출
    this.skill = skill;
  }
  coding() {
    return `Coding in ${this.skill}`;
  }
}

const dev1 = new Developer("JS");
console.dir(dev1.greet()); //Person
console.dir(dev1.coding()); //Developer

//자식 클래스는 부모 클래스의 요소를 마음껏 쓸 수 있으나 반대의 경우는 불가능.

console.log(dev1 instanceof Developer);
console.log(dev1 instanceof Person);
