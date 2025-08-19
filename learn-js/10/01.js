class Person {
  constructor(name, age) {
    this.age = age;
    this.name = name;
  }

  greet() {
    return "Hi";
  }
}

const per1 = new Person("kim", 20);
const per2 = new Person("Lee", 20);
const per3 = new Person("You", 20);

console.log(typeof Person);
console.dir(per1);
