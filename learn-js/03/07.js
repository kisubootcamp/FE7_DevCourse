// 다중 반복문
// continue
// break
// for (let i = 1; i <= 0; i++) {
//   if (i % 2 === 1) continue;
//   if (i === 8) break;
//   console.log(i);
// }

// 3번 i, j, k
// 1중첩 -> 3
// 2중첩 -> 3 * 3 = 9
// 3중첩 -> 3 * 3 * 3 = 27
for (let i = 1; i <= 3; i++) {
  console.log(i);
  for (let j = 1; j <= 3; j++) {
    console.log(j);
    for (let k = 1; j <= 3; k++) {
      console.log(k);
    }
  }
}
