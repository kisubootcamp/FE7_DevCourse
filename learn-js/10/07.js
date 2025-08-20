class MathUtils {
    static PI = 3.14159265359;
    static add(a, b) {
        return a + b;
    }
    static minus(a, b) {
        return a - b;
    }
}

// const m1 = new MathUtils();
// console.log(m1);

console.log(MathUtils.PI);
console.log(MathUtils.add(10, 20));
console.log(MathUtils.minus(10, 20));

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // static property (정적 속성)
    static APP_NAME = "Person Android";
    
    // static method (정적 메서드)
    static greet() {
        // name은 class의 hidden 속성성
        return `Hello, ${this.name}`;
    }
}
// 이것과 똑같은 함수를 워에서 정적으로 정의
// Person.greet = function () {
//     return "hello";
// }

const p1 = new Person("kim", 20);
console.dir(Person);
console.log(Person.APP_NAME);
console.log(Person.greet());