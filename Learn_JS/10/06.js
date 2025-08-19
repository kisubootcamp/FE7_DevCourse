// ES13 프라이빗 필드
class Person{
    #age;
    constructor(name, age){
        this.name = name;
        this.#age = age;
    }
    get age(){
        return this.#age;
    }

    set age(value){
        if(value < 0) throw new Error("Invalid age");
        this.#age = value;
    }
}

const p1 = new Person("kim", 20);
p1.age = -10;
console.log(p1.age);