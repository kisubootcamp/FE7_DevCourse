// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.sucoding = "잘생김";
// Person.prototype.greet = function() {
//     return "Hi";
// }

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    // 구식
    // greet = function () {
    //     return "Hello";
    // }
    // 단축 함수 문법
    greets() {
        return "Hi";
    }
}
Person.prototype.sucoding = "잘생김";
const per1 = new Person("kim", 20);
const per2 = new Person("park", 30);
const per3 = new Person("yoon", 25);
// console.log(per1.greet());
console.log(per1.greets());

console.log(typeof Person);
console.dir(per1);
