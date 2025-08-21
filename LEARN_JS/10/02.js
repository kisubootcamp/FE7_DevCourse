class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 단축 함수 문법

  greet() {
    return `안녕하세요, ${this.name}입니다.`;
  }
}
Person.prototype.sucoding = "잘생김"; // 속성을 등록하고 싶다면 prototype에 추가

const per1 = new Person("lee", 30);
const per2 = new Person("park", 25);
const per3 = new Person("kim", 20);

console.log(typeof Person); // function
console.dir(per1);
console.log(per1.greet());
