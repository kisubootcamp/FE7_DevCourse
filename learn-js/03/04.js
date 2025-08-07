let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

// 이런식으로도 사용할 수 있음! 근데 실무적으로는 do while을 사용한 적은 별로 없음
let j = 1;
do {
  console.log(j++);
} while (j <= 9);

// if문에 코드 하나만 사용할땨ㅐ? 중괄호 없어도 됨 강사님은 안쓰신다네요
let x = 0;
while (x <= 9) {
  x++;
  if (x % 2 === 1) continue;
  console.log(x);
}
