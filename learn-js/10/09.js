class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a noise.`;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }
  bark() {
    return `${this.name} barks.`;
  }
  // 오버라이딩
  speak() {
    return `${this.name} makes a noise loudly.`;
  }
}

const dg1 = new Dog("Buddy");
console.log(dg1.speak()); // Buddy makes a noise loudly.
console.log(dg1.bark()); // Buddy barks.
