// ES2022
class Person {
  #age;
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  get age() {
    return this.#age;
  }
  set age(value) {
    if (value < 0) throw new Error('제대로 넣으세요');
    this.#age = value;
  }
}

const p1 = new Person('yaho', 20);
p1.age = -1;
console.log(p1.age);
