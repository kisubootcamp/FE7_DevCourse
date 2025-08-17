function Animall(name, type, age, gender) {
  this.animalName = name;
  this.animalType = type;
  this.animalAge = age;
  this.animalGender = gender;
  this.animalInfo = function () {
    return `${this.animalName}, ${this.animalAge}`;
  };
}

const animal1 = {
  animalName: '꼬미',
  animalType: '고양이',
  animalAge: 8,
  animalGender: 'male',
  animalInfo: function () {
    return `${this.animalName}, ${this.animalAge}`;
  },
};

const animal2 = new Animall('나리', '고양이', 5, 'female');

console.log(animal1);
console.log(animal2);
