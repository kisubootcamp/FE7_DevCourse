// 반복문
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 무한 반복
let j = 0;
while (true) {
  console.log(j);
  j++;
  if (j >= 5) break; // 5가 되면 반복 종료
}

// do-while 반복문
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5); // k가 5보다 작을 때까지 반복
