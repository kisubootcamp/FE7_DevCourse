function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;

  this.drive = function () {
    console.log(this.model, this.make);
  };
}

const car1 = new Car("현대", "제네시스", 2025);
const car2 = new Car("현대", "쏘나타", 2025);
const car3 = new Car("현대", "아반떼", 2025);

// dir 객체의 속성을 계층적으로 출력해주는 메서드
console.dir(car1);
console.dir(car2);
console.dir(car3);

// 프로토타입
// 생성자 함수는 자신의 원형을 그대로 기억하는 프로토타입 객체가 존재
// "함수"마다 그 함수와 1:1로 매칭되어있는 프로토타입 이라는 공간(객체)가 있다.
// 생성자 함수 뿐만이 아니라 모든 "함수" 자체에 존재

// 함수 내부에 위치한 "prototype" 이라는 속성을 통해 접근 가능
// 프로토타입에서도 "constructor"를 통해 함수로 접근 가능

/*
[생성자 함수] <-> [프로토타입 객체]
ㄴ[인스턴스]
    ㄴ부모로 부터 물려받은 것
        ㄴ[name, age]
        ㄴ[프로토타입 객체 참조] = 생성자 함수와 같은 프로토타입 객체를 참조하고있음

*/

// 프로토타입 체인(프로토타입을 참조하고 있는 구조)
// 프로토타입 체이닝 (객체의 속성이나 메서드에 접근하려고 할 때,
// 해당 객체에 원하는 속성이 없으면 프로토타입 체인을 따라 상위 객체로 이동하며 속성을 찾는 행위)
console.log(car1.drive());
// car1 객체에 drive 메서드가 없으니, 프로토타입 체인을 타고 올라가 프로토타입에서 drive 메서드를
// 찾아 실행한다! 이 행위가 프로토타입 체이닝
