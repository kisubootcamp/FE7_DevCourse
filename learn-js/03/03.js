//while 무한 루프를 주의해서 사용.
//실서버에 들어가게되면 무한 루프 시, 망가질 수 있음.
//break: 반복문에서 빠져나감.
//continue: 반복문의 처음으로 돌아감.

let i = 1;
while (i <= 9) {
  console.log(i);
  i++;
}

//do ~while문은 실무에서 잘 사용하지 않음.
// let j = 1;
// do {
//   console.log(j++);
// } while (j <= 9);

let l = 1;
while (l <= 9) {
  l++;
  if (l % 2 === 0) continue; //반복문의 처음으로 돌아감.
  console.log(l);
  l++;
}
