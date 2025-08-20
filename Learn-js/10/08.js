class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name}(이)가 소리를 냅니다.`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  // 오버라이딩(Overriding) => 부모클래스의 메서드를 자식 클래스에서 재정의 하는 것
  speak() {
    return `${this.name}(이)가 소리를 엄청 크게 냅니다.`;
  }
  bark() {
    return `${this.name}(이)가 짖습니다.`;
  }
}
const d1 = new Dog("강쥐");
console.log(d1.speak());
console.log(d1.bark());
