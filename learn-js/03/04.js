let i = 0; // 반복문이 끝나지 않는 상황을 주의해야함  계속 참이면 무한루프
// 모든 반복문에는 break, continue 사용가능
while (i <= 9) {
  i++;
  if (i % 2 === 1) continue; // continue 는 특정조건을 건너뛰게
  console.log(i); // break 는 남은횟수 상관없이 끝내버림
}

do {
  console.log(i++);
} while (i <= 9); // do while 은 무조건 한번은 실행함(실무에서 거의 사용안함)
