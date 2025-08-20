// 생성자 함수
// 함수를 이용해서 객체를 만들어낼 수 있는 방법
// Pascal case로 네이밍하는 관례 있음 (함수 이름의 모든 단어가 대문자로 시작함)
function People() {
    this.name = "kim";
    this.age = 20;
}

// 인스턴스(=객체)
const user1 = new People();
console.log(user1);

const user = {
    name: "kim",
    age: 20,
}
console.log(user);


function Car(name, maxSpeed = 200) {
    this.name = name;
    this.speed - this.maxSpeed + 200;
    this.maxSpeed = maxSpeed;
    this.getInfo = function () {
        return `차종: ${this.name}, 최고속도: ${this.maxSpeed}`;
    }
}

const car1 = new Car("Bmw", 100);
const car2 = new Car("Benz");

// car1.speed = 250;
console.log(car1);
console.log(car1.getInfo());
console.log(car2.getInfo());

/*
const user1 = {
    name: "sucoding",
    age: 20,
};
const user2 = {
    name: "park",
    age: 20,
};
const user3 = {
    name: "kim",
    age: 30,
};
const user4 = {
    name: "sucoding",
    age: 20,
};
*/