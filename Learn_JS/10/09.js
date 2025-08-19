class Animal{
    constructor(name){
        this.name = name;
    }
    speak() {
        return `${this.name}이(가) 소리를 냅니다.`;
    }
}

class Dog extends Animal{
    constructor(){
        super("곰이");
    }
    bark(){
        return `${this.name}이 짖습니다.`
    }
    speak() {
        return `${this.name}이(가) 소리를 엄청 크게 냅니다.`;
    }
}

const dg1 = new Dog();
console.log(dg1.speak());
console.log(dg1.bark());