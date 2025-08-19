// getter 얻는 기능
// setter 설정하는 기능

function Person(lastName, firstName){
    this.lastName = lastName;
    this.firstName = firstName;
    // this.age = age;
    // // this.info = `${this.name}, ${this.age}`;
    // this.info = function(){
    //     return `${this.name}, ${this.age}`;
    // }
    // this.fullName = function(){
    //     return `${this.lastName} ${this.FirstName}`;
    // }
}

// const p1 = new Person("kim", "kisu");
// console.log(`${p1.lastName} ${p1.FirstName}`);
// console.log(p1.fullName());

// p1.name = "park";

// console.dir(p1);   
// console.log(p1.info);   

Object.defineProperty(Person.prototype, "fullName", {
    get: function () {
        return `${this.lastName} ${this.firstName}`;
    },
    set: function (value) {
        const [lastName, firstName] = value.split(" ");
        this.lastName = lastName;
        this.firstName = firstName;
    },
});
const p1 = new Person("kim", "kisu");
// p1.lastName = "park";
p1.fullName = "park chulsoo";
console.log(p1.lastName);
console.log(p1.firstName);
console.log(p1.fullName);