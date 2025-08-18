function MakeAnimalObj(name, type, age, gender) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.gender = gender;
  this.getInfo = function () {
    return `${this.name}, ${this.age}`;
  };
}
const animal1 = new MakeAnimalObj("곰이", "고양이", 8, "male");
console.log(animal1.getInfo());

const animal = {
  animalName: "곰이",
  animalType: "고양이",
  animalAge: 8,
  animalGender: "male",
  animalInfo: function () {
    return `${this.animalAge}, ${this.animalAge}`;
  },
};
