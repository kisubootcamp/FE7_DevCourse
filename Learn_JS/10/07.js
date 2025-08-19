class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // 정적 속성, 메서드
    static APP_NAME = "Person Android";
    static greet(){
        return `Hello, ${this.name}`;
    }
}

const p1 = new Person("kim", 20);
console.log(Person);
console.log(Person.APP_NAME);
console.log(Person.greet());