// 구조 분해 할당 (비구조화 할당)
const person = {
  name: "Charlie",
  age: 25,
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};
const { name, age, greet } = person;

const [kim, park] = ["Kim", "Park"];

// 응용편
const {
  name: uname,
  age: uage,
  address: { city: ucity, country: ucountry },
  food: [apple, banana, orange],
} = {
  name: "Lee",
  age: 20,
  address: {
    city: "Seoul",
    country: "Korea",
  },
  food: ["apple", "banana", "orange"],
};

//

const users = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 25, city: "Los Angeles" },
];

const [{ yourName, yourAge }, user2] = users;

//

const {
  members: [{ name: fname, age: fage }, { name: sname, age: sage }],
} = {
  members: [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
  ],
};

//

function userInfo({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
userInfo({ name: "Charlie", age: 28 });

//

function userInfo({ name = "kim", age = 30 }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
userInfo(); // Error
userInfo({}); // 빈 객체를 전달하면 기본값이 사용됨
