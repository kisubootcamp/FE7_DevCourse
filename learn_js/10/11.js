// 1. Car 클래스를 정의하고, make, model, year를 인스턴스 변수로 갖도록 하세요. info 메서드를 추가하여 자동차 정보를 출력하도록 하세요.
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  info() {
    return `${this.make}, ${this.model}, ${this.year}`;
  }
}
const car1 = new Car('Toyota', 'Camry', 2020);
console.log(car1.info()); // 2020 Toyota Camry

// 2. Animal 클래스를 만들고, Dog 클래스를 Animal로부터 상속받게 하세요. Dog 클래스에 bark 메서드를 추가하세요.

class Animal {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    return `${this.name}입니다.`;
  }
}
class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  bark() {
    return `왈왈`;
  }
}
const dog = new Dog('바둑이');
console.log(dog.introduce()); // 바둑이입니다.
console.log(dog.bark()); // 왈왈

// 3. MathUtil 클래스를 만들어, 두 수의 최소값을 반환하는 정적 메서드 min을 작성하세요.
class MathUtil {
  static min(a, b) {
    return a < b ? a : b;
  }
}
// 테스트 케이스
console.log(MathUtil.min(10, 20));

// 4.Rectangle 클래스를 정의하고, width와 height를 속성으로 갖도록 하세요. area는 접근자로 구현하세요.
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  get area() {
    return this.width * this.height;
  }
}
// 테스트 케이스
const rect = new Rectangle(5, 10);
console.log(rect.area); // 50

// 5. Counter 클래스를 만들어, 카운터를 증가시키는 클래스 메서드 increment와 현재 값을 반환하는 getValue 메서드를 추가하세요. 카운터의 초깃값은 0입니다.
class Counter {
  static count = 0;
  static increment() {
    this.count++;
  }
  static getValue() {
    return this.count;
  }
}
// 테스트 케이스
Counter.increment();
console.log(Counter.getValue());

// 6. Person 클래스를 정의하고, 프로토타입에 greet 메서드를 추가하세요.
class Person {
  constructor(name) {
    this.name = name;
  }
  // 새로운 단축 함수
  greet() {
    return `${this.name} 안녕!`;
  }
}
// 테스트 케이스
const person = new Person('이순신');
console.log(person.greet()); // 이순신 안녕!

// 7. Shape 클래스를 만들고(area 메서드 포함), Circle와 Rectangle 클래스를 상속받도록 하세요. 각각의 area 메서드를 오버라이드(오버라이딩)하세요.
class Shape {
  area() {
    throw new Error('자식클래스에서 메서드를 오버라이딩 해주세요.');
  }
}
class Circle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }
  area() {
    return this.r * this.r * 3.14;
  }
}
class Rectangle extends Shape {
  constructor(r) {
    super();
    this.r = r;
  }
  area() {
    return this.r * this.r;
  }
}
// 테스트 케이스
const circle = new Circle(5);
console.log(circle.area()); // 5 * 5 * 3.14

const rect = new Rectangle(5);
console.log(rect.area()); // 25 (5*5)

// 8. Builder 클래스를 만들어, 여러 메서드를 체이닝할 수 있도록 하세요.

class Builder {
  constructor() {
    this.str = '';
  }
  append(text) {
    this.str += text;
    return this;
  }
  getValue() {
    return this.str;
  }
}
// 테스트 케이스
const builder = new Builder();
const result = builder.append('Hello, ').append('World!').getValue();
console.log(result); // Hello, World!

// 9. Book 클래스를 정의하고, 생성될 때마다 인스턴스 수를 카운트하도록 하세요.
class Book {
  static count = 0;
  constructor(title) {
    this.title = title;
    Book.count++;
  }
  static getCount() {
    return Book.count;
  }
}
// 테스트 케이스
const book1 = new Book('1984');
const book2 = new Book('하이퍼리얼리티');
console.log(Book.getCount()); // 2

// 10. User 클래스를 정의하고, age의 기본값을 18로 설정하도록 하세요.
class User {
  static age = 18;
  constructor(name) {
    this.name = name;
  }
  info() {
    return `${this.name}의 나이는 ${User.age}세 입니다.`;
  }
}
// 테스트 케이스
const user = new User('홍길동');
console.log(user.info()); // 홍길동의 나이는 18세입니다.
