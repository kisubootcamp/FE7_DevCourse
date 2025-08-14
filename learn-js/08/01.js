// 1. 생성자 함수
// 함수를 이용해서 객체를 만들어낼 수 있는 방법

// (1) new 라는 키워드로 인해 함수의 리턴결과가 객체로 반환됨
// (2) (객체 생성) 함수 이름 :: 대문자로 시작 (파스칼 케이스) (구분을 위함)
// (3) let 선언이 아닌 this. 사용

function People() {
  // 빈 {}는 내부에 return undefined; 생략
  this.name = "kim";
  this.age = 24;
}

const user1 = new People();
console.log(user1); // 객체가 됨
console.log(user1.name);

// (4) 일반 객체와의 차이점 :: 객체 앞에 함수의 이름을 함께 출력 가능 (뿐)

const user = {
  name: "kim",
  age: 24,
};
console.log(user);

// (5) 인스턴스(=객체) : 생성자 함수로 생성된 객체 - user1은 People의 인스턴스 객체이다.

// (6) 장점
// 함수 하나로 유사한 객체를 일괄적으로 만들며, 객체들은 각각 독립적임 (= 하나에만 키 추가가 가능 등)
function Car(name, maxSpeed = 200) {
  // 기본값 지정
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.getInfo = function () {
    return `나는 ${this.name}이다.`;
  };
  this.speed = this.maxSpeed + 100;
}

// 변경 사항을 일괄 수정이 가능해짐 (유지보수 유리)
// 객체 생성에 함수의 특징을 활용 가능 (함수 특징 : 매개변수 받을 수 있음, 값 유동적으로 변경 가능)
const car3 = new Car("BMW", 100);
console.log(car3);
console.log(car3.getInfo());
