// 변수 쉐도잉
// 같은 이름의 변수가 더 하위 스코프에 선언되어 상위 스코프의 변수 이름을 가림

const num = 10;
function printNum() {
  const num = 20;
  function inner() {
    const num = 30;
    console.log(num); // 30;
  }
  inner();
}
printNum();
