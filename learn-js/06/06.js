// 변수 쉐도잉
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

// 함수 스코프가 정의되어있는 위치가 다르기 때문에 b가 10이 나옴!
// a 함수 내부에 b함수 스코프가 존재하였으면 b도 20이 나왔을 것.
const num2 = 10;
function a() {
  const num2 = 20;
  b();
  console.log("a:" + num2);
}
function b() {
  console.log("b:" + num2);
}
a();
