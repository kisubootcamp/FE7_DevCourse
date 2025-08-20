class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name}이(가) 소리를 냅니다.`;
  }
}
class Dog extends Animal {
  constructor(name = 'dk') {
    super(name);
  }
  bark() {
    return `${this.name}이(가) 짖습니다.`;
  }
  // 오버라이딩(overriding)
  // 부모 클래스의 메서드를 자식 클래스에서 재정의 하는 것.
  speak() {
    return `${this.name}이(가) 엄청 크게 소리를 냅니다.`;
  }
}

const dg1 = new Dog('퍼피');
console.log(dg1.speak());
console.log(dg1.bark());
