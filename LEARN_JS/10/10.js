class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const p = new Person("Alice", 30);
console.log(String(p));
console.log(p.toString());
