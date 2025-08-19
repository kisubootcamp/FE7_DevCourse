// class 상속 다른 예재
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} 이 소리를 냅니다.`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  bark() {
    return `${this.name} 이 짖습니다.`;
  }
  // 이렇게 부모에게 있어도 자식에게 같은 메서드가 있으면 자식 메서드가 나옴
  // 이걸 오버라이딩이라고 부름
  speak() {
    return `${this.name}이(가) 소리를 크게 냅니다.`;
  }
}

const dg1 = new Dog("곰이");
console.log(dg1.speak());
console.log(dg1.bark());
