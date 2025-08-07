// 다중 반복문
// break, continue

// for (let i = 1; i <= 9; i++) {
//   if (i % 2 === 1) continue;
//   if (i === 8) break;
//   console.log(i);
// }

// 3번 i, j, k
// 1중첩 -> 3
// 2중첩 -> 3 * 3 = 9
// 3중첩 -> 3 * 3 * 3 = 27
// 결론적으로 중첩 수만큼 제곱됨.

let n = 0;
for (let i = 1; i <= 3; i++) {
  console.log(`i = ${i}`);
  for (let j = 1; j <= 3; j++) {
    for (let k = 1; k <= 3; k++) {
      n++;
    }
  }
}

console.log(n);
