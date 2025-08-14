// 생성자 함수
const animal = {
  animalName: '곰이',
  animalType: '고양이',
  animalAge: 8,
  animalGender: 'male',
  animalInfo: function () {
    return `${this.animalAge}, ${this.animalName}`;
  },
};

function Animal(name, type, age, gender) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.gender = gender;
  this.animalInfo = () => {
    return `${this.name}, ${this.type}, ${this.age}`;
  };
}

const cat = new Animal('곰이', '고양이', 8, '남자');
console.log(cat.animalInfo());
