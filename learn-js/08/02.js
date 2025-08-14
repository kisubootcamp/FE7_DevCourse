// 전환해보기

// 객체
const animal1 = {
  animalName: "냥",
  animalType: "cat",
  animalAge: 5,
  animalGender: "female",
  animalInfo: function () {
    return `${this.animalAge}, ${this.animalType}`; //..?
  },
};

// 생성자 함수
function Animal2(name, type, age, gender) {
  this.animalName = name;
  this.animalType = type;
  this.animalAge = age;
  this.animalGender = gender;
  this.animalInfo = function () {
    return `${this.animalAge}, ${this.animalType}`;
  };
}
console.log(animal1);
const animal2 = new Animal2("kk", "cat", 6, "male");
console.log(animal2);
