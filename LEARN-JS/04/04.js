// 함수를 만들어서 중복되는 코드들을 재활용 할 수 있다
// 유지보수가 쉽다 ( 몇 천개의 중복되는 코드들을 한번에 관리 가능 )
// 코드의 재사용성!

// function gugudan3() {
//   for (let i = 1; i <= 9; i++) {
//     console.log(`3 * ${i} = ${3 * i}`);
//   }
// }

function gugudan(dan) {
  // dan -> 매개변수, 파라미터
  for (let i = 1; i <= 9; i++) {
    console.log(`${dan} * ${i} = ${dan * i}`);
  }
}

gugudan(3); // 3 -> 인자 또는 인수

// 함수의 매개 변수
// 매개 변수는 정의에 대한 의무가 없다.
// 가변 인자 함수
function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  // console.log(arguments[0]);
  // [Arguments] { '0': 10, '1': 20 }
  // 유사 배열 객체 ( 객체처럼 생겼지만 배열처럼 사용 가능 )
  console.log(result);
}

sum(10, 20);
sum(10, 20, 30);

const obj = {
  name: 'hyun',
  greet: function () {
    console.log('greet');
  },
};

obj.greet();
