// 상속 구현

class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
  greet (){
    return `Hello, ${this.name}`;
  }
}

class Developer extends Person {
  constructor(name,age,skill){
    super(name,age); // 부모의 생성자를 호출
    this.skill = skill;
  }
  coding(){
    return `Coding in ${this.skill}`;
  }
}

const dev1 = new Developer("kim", 20, "JS");
console.dir(dev1);
console.dir(dev1.greet());

// 아래에서 위로는 상속 가능, 위에서 아래로는 불가능


console.lof(dev1 instanceof Developer); //트루
// instanceof :: dev1은 Devloper의 인스턴스니?? 라는 의미
console.lof(dev1 instanceof Person); //트루, 상속받았으므로
// 하나의 클래스는 하나의 상속만 받을 수 있음 (?)


// 예제 하나 더

class Animal {
  constructor(name){
    this.name = name;
  }
  speak(){
    return `${this.name}이(가) 소리를 냅니다.`;
  }
  }

class Dog extends Animal {
  constructor(name){
    super(name);
  }
  bark(){
    return `${this.name}이 짖습니다.`;
    // 고유 메서드
}
// 오버라이딩(overriding)
// 부모클래스의 메서드를 자식 클래스에서 재정의 하는 것
  speak(){
    return `${this.name}이(가) 소리를 엄청 크게 냅니다.`;
  }
}

const dog1 = new Dog("멍멍");
console.log(dog1.speak());
console.log(dog1.bark());