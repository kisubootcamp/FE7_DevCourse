//for 반복문

for (let i = 0; i < 10; i++) {
  console.log(i);
  // let i는 블록 범위 스코프
}

let n = 0;
for (let i = 0; i <= 9; i++) {
  for (let j = 0; j <= 9; j++) {
    n++;
  }
}
console.log(n);

// 반복문의 중첩은 O(N*M) 의 시간 복잡도를 가지고 있다.
// 중첩이 하나 늘어날수록 시간 복잡도가 O(n)이 곱해지는 방식으로 증가
