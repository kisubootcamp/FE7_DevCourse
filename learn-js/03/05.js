// var, let, const
// 블록 스코프 (영향 범위, 범위)

{
  let num = 10;
}
console.log(num);
// 블록 스코프를 벗어나면 num는 정의되지 않음

for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 블록 스코프를 벗어나면 i는 정의되지 않음
