class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
    
  greet() {
    return `Hello, ${this.name}`;
  }
    
  getInfo() {
    return `${this.name} is ${this.age} years old.`;
  }
}

const p1 = new Person("Lee", 30);
console.log(p1); // Person { name: 'Lee', age: 30 }
console.log(p1.greet()); // Hello, Lee
console.log(p1.getInfo()); // Lee is 30 years old.
