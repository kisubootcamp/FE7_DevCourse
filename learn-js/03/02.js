// 조건식

const a = 2;

// if문 -> 표현식으로 조건을 처리할 때 사용
if (a > 10) {
  // 조건이 참일 때 실행되는 코드
} else if (a > 0) {
  // 첫 번째 조건이 거짓이고, 두 번째 조건이 참일 때 실행되는 코드
} else {
  // 모든 조건이 거짓일 때 실행되는 코드
}

// switch문 -> 값으로 조건을 처리할 때 사용
// switch, case, break, default
// fall through -> case가 일치하지 않으면 다음 case로 넘어가는 것
switch (a) {
  case 1:
    // a가 1일 때 실행되는 코드
    break;
  case 2:
    // a가 2일 때 실행되는 코드
    break;
  default:
  // a가 위의 모든 경우에 해당하지 않을 때 실행되는 코드
  // break 생략 가능
}
// break 문은 switch문에서 각 case를 종료하고, switch문을 빠져나오게 하는 문법
// default 문은 switch문에서 모든 case가 일치하지 않을 때 실행되는 코드 블록
