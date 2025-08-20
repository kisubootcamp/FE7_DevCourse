// static
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static APP_NAME = "My App";
  static greet() {
    return "Hello";
  }
}

const p1 = new Person("Lee", 30);
console.log(p1.greet()); // TypeError: p1.greet is not a function
console.log(Person.greet()); // Hello

// static 키워드 코드와 똑같은 효과
Person.greet = function () {
  return "Hello";
};

//

class MathUtils {
  static PI = 3.14159265359;
  static add(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
}

const m1 = new MathUtils();
console.log(m1);

console.log(MathUtils);
console.log(MathUtils.PI); // 3.14159265359
console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.subtract(5, 3)); // 2
