// 연습 문제

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

// 3. 정적 메서드
class MathUtil{

}

console.log(MathUtil.min(10, 20));

// 4. 접근자
class Rectangle{
  constructor(width,height){
    this.width=width;
    this.height=height;
  }

  area(){
    return this.width*this.height;
  }
}

const rect = new Rectangle(5, 10);
console.log(rect.area); // 50