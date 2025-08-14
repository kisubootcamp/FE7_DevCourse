// fall through 활용한 예.

const day = '토요일';
switch (day) {
  case '토요일':
  case '일요일':
    console.log('주말입니다.');
    break;
  default:
    console.log('평일입니다.');
}
