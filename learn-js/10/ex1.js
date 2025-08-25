// 연습 문제
// 정적 메서드 (3,5,9 다시) / 8~10

// 1. 기본 클래스 생성
class Car {
  constructor(make, model, year) {
    this.make=make;
    this.model=model;
    this.year=year;
  }

  info() {
    return `${this.make},${this.model},${this.year}`
  }
}

const car1 = new Car('Toyota', 'Camry', 2020);
console.log(car1.info()); // 2020 Toyota Camry

// 2. 상속
class Animal {
  constructor(name){
    this.name = name;
  }
  introduce (){
    return `${this.name}입니다.`;
  }
}

class Dog extends Animal{
  constructor(name){
    super(name);
  }

    bark(){
    return `왈왈`;
    }
  }

const dog = new Dog('바둑이');
console.log(dog.introduce()); // 바둑이입니다.
console.log(dog.bark()); // 왈왈

// 3. 정적 메서드 ***
// MathUtil 클래스를 만들어, 두 수의 최소값을 반환하는 정적 메서드 min을 작성
class MathUtil{
  constructor(num1, num2){
    this.num1 = num1;
    this.num2 = num2;
  }
  min(){
    if (num1 > num2) return this.num1;
    else if (num1 < num2) return this.num2;
    
  }
}

const MathUtil = new MathUtil(num1, num2);

console.log(MathUtil.min(10, 20));

// 4. 접근자 *
//  Rectangle 클래스를 정의하고, width와 height를 속성으로 갖도록 하세요. area는 접근자로 구현
class Rectangle{
  constructor(width,height){
    this.width=width;
    this.height=height;
  }

  get area(){
    return this.width*this.height;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // 50

// 5. 정적 메서드 ***
// Counter 클래스를 만들어, 카운터를 증가시키는 클래스 메서드 increment와 
// 현재 값을 반환하는 getValue 메서드를 추가하세요. 
// 카운터의 초깃값은 0입니다.
class Counter {
  static count = 0;
  static increment() {
    this.count++;
  }
  static getValue() {
    return this.count;
  }
}
Counter.increment();
Counter.increment();
console.log(Counter.getValue());

// 6.
// Person 클래스를 정의하고, 프로토타입에 greet 메서드를 추가하세요.
// 자동 저장...?
class Person {
  constructor(name) {
    this.name = name;
  }
  // 구식 방법
  // ㄴ Person.prototype.greet = function(){}
  // shorthand method
  greet() {
    return `${this.name} 안녕!`;
  }
}

const person = new Person("이순신");
console.log(person.greet()); // 이순신 안녕!

// 7. 다형성, 오버라이딩 **
// Shape 클래스를 만들고(area 메서드 포함), Circle와 Rectangle 클래스를 상속받도록 하세요. 각
// 각의 area 메서드를 오버라이드(오버라이딩)하세요.
class Shape {
  // constructor(num7){
  //   this.num7 = num7;
  // }
  area(){
   // return this.num7 *this.num7 ;
   return 0;
  }
}

class Circle extends Shape{
  constructor(radius){
    super(); // ()가 빈
    this.radius = radius;
  }

  area(){
    return this.radius *this.radius*3.14 ;
  }
}

class Rect extends Shape{
  constructor(num7){
    super();
    this.num = num7;
  }
  area(){
   return this.num *this.num ;
  }
}

const circle = new Circle(5);
console.log(circle.area());  // 5 * 5 * 3.14 

const rect2 = new Rect(5);
console.log(rect2.area()); // 25 (5*5)
// 굳이 오버라이딩을 하는 이유? : 공통되는 부분이지만 클래스마다 방식이 조금 다를 때 편해서?
// 편하다? : 관리가 편하다? 

// 다형성 :: 다양한 형태를 가질 수 있다.
// 기능 = 선언 부분 + 구현 부분 = 1 : N 관계, 개발자는 선언부(의 규격)에 맞춰 다양한 구현 부분을 구상할 수 있다
// 같은 메서드여도 인스턴스에 따라 다양한 형태(기능, 의미)가 될 수 있다
// 오버라이딩 처럼, Animal.sound()가 Dog에선 멍, Cat에선 냥, Duck에선 꽥꽥이 되듯이

///////////////////////////////////////////////////////////////////////////////////////////////

// 8. 인스턴스 메서드 체이닝 **
// Builder 클래스를 만들어, 여러 메서드를 체이닝 -> 이렇게도 사용할 수 있구나
class Builder {
  constructor() {
    this.value = "";
  }
  append(text) {
    this.value += text;
    return this;
  }
  getValue() {
    return this.value;
  }
}
const builder = new Builder();
const result = builder.append("Hello, ").append("World!").getValue();
console.log(result); // Hello, World!
// .getValue()가 없을 때 : 출력 :: Builder { value: 'Hello, World!' }

// 9. 클래스의 인스턴스 추적 ***
// Book 클래스를 정의하고, 생성될 때마다 인스턴스 수를 카운트하도록 하세요.
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
const book1 = new Book("1984");
const book2 = new Book("하이퍼리얼리티");
console.log(Book.getCount()); // 2

// 10. 기본값 설정 **
// User 클래스를 정의하고, age의 기본값을 18로 설정하도록 하세요.
class User {
  constructor(name, age = 18) { // 여기에 설정할 수 있다
    this.name = name;
    this.age = age;
    //age = 18; // 이건 안 되네... 왜 안 되징...
  }
  info() {
    return `${this.name}의 나이는 ${this.age}세입니다.`;
  }
}
const user = new User("홍길동");
console.log(user.info()); // 홍길동의 나이는 18세입니다.

// 이렇게 하면 안 되남?
// ㄴ age를 고정값으로 쓸 때는 괜찮은데, 인스턴스에 따라서 기본값을 다르게 주고 싶을 땐 불편
class User {
  constructor(name, age) {
    this.name = name;
    this.age = 18; 
  }
  info() {
    return `${this.name}의 나이는 ${this.age}세입니다.`;
  }
}
const user = new User("홍길동");
console.log(user.info()); // 홍길동의 나이는 18세입니다.
