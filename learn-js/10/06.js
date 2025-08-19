class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name}이(가) 소리를 냅니다.`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // 부모 생성자와 기능이 완전히 같아도 super를 통해 생성자를 명시적으로 작성
  }
}

const dg1 = new Dog("퍼피");
console.log(dg1.speak());
