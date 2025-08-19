class Person {
    constructor(lastName, firstName) {
        this.lastName = lastName;
        this.firstName = firstName;
    }
    // 게터 = 함수 (x)
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }
    set fullName (value) {
        // const [lastName, firstName] = value.split(" ");
        // this.lastName = lastName;
        // this.firstName = firstName;
        this.fullName = value;

    }
    get reverseName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const p1 = new Person("kim", "suyeon");
p1.fullName = "park chulsu"
console.dir(p1);
console.log(p1.fullName);
console.log(p1.reverseName);
