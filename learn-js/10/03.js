class Person {
    consturctor(name, age) {
        this.name = name;
        this.age = age;
    }
    // prototype 객체에 등록
    greet() {
        return `Hello, ${this.name}`;
    }
    getInfo() {
        return `${this.name}, ${this.age}`;
    }
}

const p1 = new Person("kim", 20);
console.log(p1.greet());
console.log(p1.getInfo());