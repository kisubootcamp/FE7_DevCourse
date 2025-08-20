function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hi1`
}

Person.prototype.sucoding = "잘생김";
Person.prototype.greet = function () {
    return `Hi1`;
}

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hi`;
    }
}
Person.prototype.sucoding = "잘생김";

const per1 = new Person("kim", 20);
const per2 = new Person("park", 30);
const per3 = new Person("yoon", 25);
console.log(per1.greet());
console.log(per2.greets());
console.log(per3);

console.log(typeof Person);
console.dir(per1);