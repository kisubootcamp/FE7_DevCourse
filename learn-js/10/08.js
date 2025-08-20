class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Developer extends Person {
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }
  coding() {
    return `${this.name} is coding in ${this.skill}.`;
  }
}

const p1 = new Person("Kim", 30);
console.log(p1.coding()); // TypeError: p1.coding is not a function

const dev1 = new Developer("Lee", 20, "JavaScript");
console.log(dev1); // Developer { skill: 'JavaScript' }
console.log(dev1);
