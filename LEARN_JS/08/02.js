function Animal1(name, type, age, gender) {
  this.animalName = name;
  this.animalType = type;
  this.animalAge = age;
  this.animalGender = gender;
  this.animalInfo = function () {
    return `${this.animalAge}, ${this.animalAge}`;
  };
}

const animal1 = {
  animalName: "곰이",
  animalType: "고양이",
  animalAge: 8,
  animalGender: "male",
  animalInfo: function () {
    return `${this.animalAge}, ${this.animalAge}`;
  },
};

console.log(animal1);
const animal2 = new Animal1("흰둥이", "강아지", 4, "male");
console.log(animal2);
