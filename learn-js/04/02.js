//매개변수 parameter
function gugudan(dan) {
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} * ${i} = ${dan * i}`);
  }
}
gugudan(3); // 여기서 3은 인자 또는 인수(argument)

//함수의 매개변수는 개수 제한 없음.
//덧셈을 하는 함수
// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

// sum(10, 20);

//매개변수의 개수의 유동성을 가지려면?
function sum(num1, num2, num3) {
  console.log(num1 + num2);
}

sum(10, 20); //이때 num3은 nudefined로 전달되어 NaN 출력된다.

//가변 인자 함수 (자바 스크립트는 함수 오버로딩이 없음.) (ES5까지 자주 사용. 현재는 사용 및 권장 X )
//arguments는 객체이지만, 괄호 인덱스를 사용할 수 있다. -> 유사 배열 객체
//유사 배열 객체: 객체처럼 생겼지만, 배열처럼 사용이 가능하다.
function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  console.log(result);
}

sum(10, 20);

//객체의 속성으로 함수가 지정되어 있으면 아룰 메서드(method)라고 한다.
const obj = {
  name: "minkyeong",
};
