// 생성자 함수

function makeAnimalObject(name, type, age, gender) {
  this.animalName = name;
  this.animalType = type;
  this.animalAge = age;
  this.animalGender = gender;
  this.animalInfo = function () {
    return `${this.animalName}, ${this.animalType}, ${this.animalAge}, ${this.animalGender}`;
  };
}

const animal1 = {
  animalName: "곰이",
  animalType: "고양이",
  animalAge: 8,
  animalGender: "male",
  animationInfo: function () {
    return `${this.animalAge}, ${this.animalType}, ${this.animalGender}`;
  },
};

const animal2 = new makeAnimalObject("나리", "고양이", 5, "female");
console.log(animal2);
