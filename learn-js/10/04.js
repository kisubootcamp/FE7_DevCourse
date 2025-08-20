// 1. 게터(getter)
// 1.1 getter -> get + -er -> "얻는 사람" 또는 "얻는 기능"
// 2. 세터(setter)
// 2.1 set + -er -> "설정하는 사람" 또는 "설정하는 기능"

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.info = `${this.name}, ${this.age}`;
// }

// const p1 = new Person("kim", 20);
// p1.name = "park";
// console.log(p1.info); // kim, 20
// // info에는 변경된 name 적용 안 됨

function Person(lastName, firstName) {
    this.lastName = lastName;
    this.firstName = firstName;
    this.fullName = function () {
        return `${this.lastName} ${this.firstName}`;
    }
}

Object.defineProperty(Person.prototype, "fullName", {
    get: function () {
        retrun `${this.lastName} ${this.firstName}`;
    },
    set: function (value) {
        const [lastName, firstName] = value.split(" ");
        this.lastName = lastName;
        this.firstName = firstName;
    }
})

const p1 = new Person("kim", "suyeon");
console.log(`${p1.lastName} ${p1.firstName}`);
console.log(p1.lastName);
console.log(p1.FirstName);
console.log(p1.fullName);