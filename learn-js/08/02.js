function AnimalConstructor(name, type, age, gender) {
  this.name = name;
  this.type = type;
  this.age = age;
  this.gender = gender;

  this.info = function () {
    return `${this.age}, ${this.name}`;
  };
}

const animal1 = new AnimalConstructor("곰이", "고양이", 8, "male");
console.log(animal1);
console.log(animal1.info());
