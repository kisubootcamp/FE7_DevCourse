// 함수의 맴개 변수
// 매개 변수는 정의에 대한 의무가 없다
// 가변 인자 함수
// arguments : 유사 배열 객체. 인덱스로 접근 가능, length 사용 가능

function sum() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }

  console.log(result);
}

sum(10, 20);
