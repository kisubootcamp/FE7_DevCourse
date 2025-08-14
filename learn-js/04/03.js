// 5-2. 매개 변수
// 함수 재사용성에 기여

// (1) 매개 변수, 인자
function gugudan(dan) {
  // 매개 변수(parameter) -> dan
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} * ${i} = ${dan * i}`);
  }
}

gugudan(3); // 인자 또는 인수(argument) -> 3
// 이동 :: 인자 -> 매개 변수

// (2) 매개 변수 갯수 제한 없음
function sum(num1, num2) {
  // 콤마로 구분하면 여러 개 가능
  console.log(num1 + num2);
}

sum(1, 2);
sum(100, 200);

// (3) 매개 변수는 정의에 대한 의무가 없음
// 함수 호출 시, 보내는 인자를 꼭 받아야하는 의무가 없음 - 문법적 버그가 아님

// if, 문제 상황 :: 변수의 수 관련
// 1. 매개변수 < 인자 : 가능
// 3개 보내도 매개 변수 없으면 (0개) 안 받아도 되고, 인자 2개 보내고 매개 변수 1개 라도 실행이 됨 하나를 낭비할 뿐
function sum_1(num3, num4) {
  console.log(num3 + num4);
}
sum_1(1, 2, 3);

// 2, ** 매개변수 > 인자 : 불가능
// 이건 안 됨 -> NaN 됨 (수학적 계산에서 오류가 났을 때)
function sum_2(num5, num6, num7) {
  console.log(num5 + num6 + num7);
}
sum_1(1, 2);
// num7이 undefined 됨 -> 수학적 계산이 불가 -> NaN

// 문제점 해결 -> 가변 인자 함수, 나머지 매개 변수

// (4) 가변 인자 함수 (ES5) ---> 이제 권장되지 않음
// 함수 내부의 arguments값(내부에 감춰진 값, 선언 안 해도 존재) 사용
// 매개 변수의 수가 결정되어 있지 않아서 인자가 몇 개든 받을 수 있는 함수

function sum_3() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  console.log(result);
}
// 출력 : 객체처럼 보임({}로 쌓임), 배열처럼 접근 가능(인덱스 0,1...) === 유사 배열 객체
// arguments === 유사 배열 객체에 포함
sum_3(10, 20, 40, 50);

// (+) 함수 / 매서드
const obj = {
  name: "sooyeon",
  greets: function () {
    console.log("greets");
  },
};

console.log(obj.name);
obj.greets(); //obj 객체에 포함된 함수는(X)/매서드는(O)

// (5) 나머지 매개 변수 (ES6) ---> 권장
// ... 스프레드 연산자

function sum_4(num1, num2, ...nums) {
  console.log(num1, num2);
  console.log(nums);
}
sum_4(10, 20, 30, 40);

// 주의사항 :: ...nums(나머지 매개 변수)을 맨 앞에 사용 금지 & 한 개만 지정
// 어떻게 활용되는거지
