class User {
    constructor(firstName, lastName) {
        this.first = firstName;
        this.last = lastName;
    }

    get fullName() {
        return `${this.first} ${this.last}`
    }

    set fullName(value) {
        [this.first, this.last] = value.split(" ");
    }
}

const u = new User("길동", "홍");
console.log(u.fullName);
u.fullName = "민수 김";
console.log(u.first, u.last)