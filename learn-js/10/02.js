class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    //prototype에 등록
    return `Hello , ${this.name} 하이`;
  }

  getInfo() {
    return `${this.age} 하이루`; // 몇개든 자동등록s
  }
}

const p1 = new Person("Lee", 20);
console.log(p1.greet());
console.log(p1.getInfo());
