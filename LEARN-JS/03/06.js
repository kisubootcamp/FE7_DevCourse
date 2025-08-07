// if -> 표현식으로 조건을 처리할 때 사용
// switch -> 값으로 조견을 처리할 때 사용

const fruit = 'orange';
switch (fruit) {
  case 'apple':
    console.log('사과입니다.');
    break;
  case 'banana':
    console.log('바나나 입니다.');
    break;
  // fall through
  case 'orange':
    console.log('오렌지 입니다.');
  default:
    console.log('사과도 바나나도 오렌지도 아닙니다.');
}
