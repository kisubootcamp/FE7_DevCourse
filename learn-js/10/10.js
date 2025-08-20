class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const p = new Person("Kim", 25);
console.log(p); // Person { name: 'Kim', age: 25 }
console.log(String(p)); // [object Object]
console.log(p.toString()); // [object Object]
// toString은 Object.prototype에 정의되어 있음
