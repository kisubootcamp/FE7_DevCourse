//호이스팅: 선언과 할당 중에서 선언을 최상위로 끌어 올리는 행위.
//자바는 인터프리터: 코드를 상단부터 한줄 한줄 읽으며 즉시 실행하는 프로그램.
//var num; 끌어올려진 선언.
console.log(num); //undefined: 값은 비어있지만, num이 정상적으로 선언됨
var num = 11;

//let, const 사용 시 호이스팅 OK 단, 초기화가 늦어진디.
//let num;
console.log(num); //Cannot access 'num' before initialization: 호이스팅이 되나, 변수의 값이 할당되기 전에 접근이 불가능.
let num = 11;

//함수 선언문의 경우 호이스팅으로 최상위로 끌어올려짐.
//함수 표현식의 경우 선언과 할당으로 분리가 되어 var greet 선언만 최상단으로 끌어올려진다.
var greet = function printName() {
  console.log("greet");
};
