// 생성자 함수
function Animal(name, type, age, gender) {
  this.animalName = name;
  this.aniimalType = type;
  this.animalAge = age;
  this.animalGender = gender;
  this.animalinfo = () => `${this.animalAge}, ${this.animalAge}`;
}

const animal1 = {
  animalName: "곰이",
  aniimalType: "고양이",
  animalAge: 8,
  animalGender: "male",
  animalInfo: function () {
    return `${this.animalAge}, ${this.animalAge}`;
  },
};

const animal2 = new Animal("나리", "고양이", 5, "female");
console.log(animal1);
console.log(animal2);
