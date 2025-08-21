// 객체의 기본 개념
const user = { name: "lee" };
user.age = 20;
user.name = "kim";
user.email = "a@b.com";
delete user.email;
console.log(user);

const a = { x: 1 };
const b = a;
b.x = 2;
console.log(a.x); // 2 (a와 b가 같은 객체 참조)

const user2 = {
  name: "Ailece",
  age: 25,
  introduce() {
    console.log(`I'm ${this.name} and I'm ${this.age} years old`);
  },
};
user2.introduce();

const car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2024,
  getInfo() {
    console.log(`${this.brand} ${this.model} (${this.year})`);
  },
};
car.getInfo();
