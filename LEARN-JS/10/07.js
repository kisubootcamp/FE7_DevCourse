class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // 멤버 속성과는 관련없이 별도의 독립적인 로직을 수행할 때
  // static property ( 정적 속성 )
  static APP_NAME = 'Person Android';
  // static method ( 정적 메서드 )
  static greet() {
    return `hello, ${this.name}`;
  }
}

const p1 = new Person('lee', 20);
console.log(Person);
console.log(Person.APP_NAME);
console.log(Person.greet());
