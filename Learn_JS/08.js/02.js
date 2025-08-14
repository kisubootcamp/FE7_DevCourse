const animal1 ={
    animalName : "곰이",
    animalType : "고양이",
    animalAge : 8,
    animalGender : "male",
    animalInfo : function () {
        return `${this.animalType}, ${this.animalAge}`;
    }
}

// 생성자 함수
function MakeAnimalObject(name="곰이", type="고양이", age=8, gender="male"){
    this.name = name;
    this.type = type;
    this.age = age;
    this.gender = gender;
    this.animalInfo = function () {
        return `${this.animalType}, ${this.animalAge}`;
    }
}

console.log(animal1);
const animal2 = new MakeAnimalObject();
console.log(animal2);