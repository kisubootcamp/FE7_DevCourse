class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    toString(){
        return `${this.name}(${this.age})`;
    }
}

const p = new Person("kim", 20);
console.log(String(p));
console.log(p.toString());
console.dir(p);