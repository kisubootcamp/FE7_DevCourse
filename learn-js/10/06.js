class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name}이(가) 소리를 냅니다.`;
  }
  toString() {
    return `Animal ${this.name}`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  bark() {
    return `${this.name}이 짖습니다.`;
  }

  //오버라이딩
  //부모클래스의 메서드를 자식 클래스에서 재정의하는 것.
  speak() {
    return `${this.name}이(가) 소리를 엄청 크게 냅니다.`;
  }
}

const dg1 = new Dog("퍼피");
console.log(dg1.speak());
console.log(dg1.bark());
console.log(dg1.toString()); //Object의 메소드 toString을 오버라이딩
