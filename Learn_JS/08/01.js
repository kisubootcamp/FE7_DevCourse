// const user1 = {
//     uname : "sucoding",
//     age : 28,
// };
// const user2 = {
//     uname : "park",
//     age : 28,
// };
// const user3 = {
//     uname : "kim",
//     age : 28,
// };
// const user4 = {
//     uname : "sucoding",
//     age : 20,
// };

// 함수를 이용해서 객체를 만들어낼 수 있는 방법
// 생성자 함수
function Person() {
    this.name = "kim";
    this.age = 20;
}

function Car(name, maxSpeed = 200) {
    // this.name = "Mercedes-Benz";
    // this.name = "BMW";
    this.name = name;
    this.maxSpeed = maxSpeed;
    this.getInfo = function() {
        return `차종: ${this.name}, 최고속도 : ${this.maxSpeed}`;
    }
}

// 인스턴스(=객체)
const user1 = new Person();
console.log(user1);
console.log(user1.name);
console.log(user1.age);

const car1 = new Car("BMW", 100);
const car2 = new Car("Mercedes-Benz");
const car3 = new Car("Porsche", 300);
// const car4 = new Car();
// const car5 = new Car();
// car1.speed = 250;
console.log(car1);
console.log(car2);
console.log(car3.getInfo());
