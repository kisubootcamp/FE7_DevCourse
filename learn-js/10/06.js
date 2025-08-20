// ES2022
class Person {
    #age; // 프라이빗 필드로 선언했지만 그렇게 사용하지 않음
    // get, set과 함께 사용하기 위해 변수를 프라이빗하게 바꿈
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    get age() {
        return this.#age;
    }

    set age(value) {
        if(value < 0) throw new Error("Invalid age");
        this.#age = value;
    }
}

const p1 = new Person("kim", 20);
p1.age = -10;
console.log(p1.age);