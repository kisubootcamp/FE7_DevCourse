// 이럴때는 실행컨텍스트가 계단식으로 쌓이는 게 아니라, b 함수가 전역컨텍스트에서 선언되어있기 떄문에
// 전역컨텍스트에 있는 outer와 연결되어 있다고 생각

function a() {
  const num = 20;
  b();
}

function b() {
  console.log(num);
}

a();
