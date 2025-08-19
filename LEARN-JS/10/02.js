class Person {
  name = 'kim';
  age = 20;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // 구식
  greet = function () {
    return `Hello`;
  };
  // 단축 함수 문법
  greets() {
    return 'hi';
  }
}

const per1 = new Person('kim', 20);
const per2 = new Person('park', 30);
const per3 = new Person('lee', 25);

console.dir(per1);
console.log(per1.greets());
