// 자바스크립트는 override가 없음 - typescripts 부터 존재
// arguments를 통해 어느정도 해결 가능
function sum() {
  console.log(arguments);
}

sum(1, 2);
sum(1, 2, 3);
