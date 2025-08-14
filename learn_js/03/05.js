// if -> 표현식으로 조건을 처리할 때 사용.
// switch -> 값으로 조건을 처리할 때 사용.
// switch, case, break, default
// break가 없으면 fall through현상이 발생. -> 때문에 의도적으로 활용하기도 함.

const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('사과입니다.');
    break;
  case 'banana':
    console.log('바나나입니다.');
    break;
  case 'orange':
    console.log('오렌지입니다.');
    break;
  default:
    console.log('사과도 바나나도 오렌지도 아닙니다.');
}
