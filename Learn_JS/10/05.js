class Person{
    constructor(lastName, firstName){
        this.lastName = lastName;
        this.firstName = firstName;
    }


    // 게터 함수 x
    get fullName(){
        return `${this.lastName} ${this.firstName}`;
    }

    get reverseName(){
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value){
        [this.lastName, this.firstName] = value.split(" ");
    }
    // set fullName(value){
    //     this.fullName = value;
    // }
}

const p1 = new Person("kim", "kisu");
p1.fullName = "park younghee";
console.dir(p1);
console.log(p1.fullName);
console.log(p1.reverseName);
