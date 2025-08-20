class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, ${this.name}`;
    }
}
const p1 = new Person("kim", 20);
console.log(p1.greet());
// console.log(p1.coding());
// 부모 클래스에서는 자식 클래스의 속성이나 메서드에 접근할 수 없음


class Developer extends Person {
    constructor(name, age, skill) {
        super(name, age); // 부모의 생성자를 호출함
        this.skill = skill;
    }
    coding() {
        return `Coding in ${this.skill}`;
    }
}

const dev1 = new Developer("kim", 20, "JS");
console.dir(dev1);
console.dir(dev1.greet());
console.dir(dev1.coding());
console.log(dev1 instanceof Developer);
console.log(dev1 instanceof Person);