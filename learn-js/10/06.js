// private fields (ES13, 2022에 추가된 문법)
class Person {
  #age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person("Lee", 30);
console.log(p1.#age); // SyntaxError: Private field '#age' must be declared in an enclosing class
