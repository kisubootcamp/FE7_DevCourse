const person = {
    firstName: "kisu",
    lastName: "kim",
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(value){
        [this.firstName, this.lastName] = value.split(" ");
    },
};

person.fullName = "min Park";
console.log(person.fullName);

// enum
const Roles = Object.freeze({
    ADMIN: "main",
    USER: "user",
    GUEST: "guest",
});

const config = Object.freeze({
    apiUrl: "https://localhost:3000",
    timeout: 3000,
});
