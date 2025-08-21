class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} 이(가) 소리를 냅니다.`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  bark() {
    return `${this.name}이(가) 짖습니다.`;
  }
  // 오버라이딩
  // 부모클래스의 메서드를 자식 클래스에서 재정의 하는 것
  speak() {
    return `${this.name}이(가) 소리를 엄청 크게 냅니다.`;
  }
}
const dg1 = new Dog("Buddy");
console.log(dg1.speak()); // Buddy이(가) 소리를 엄청 크게 냅니다.
console.log(dg1.bark()); // Buddy이(가) 짖습니다.
