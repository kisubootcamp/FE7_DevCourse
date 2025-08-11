// 다중 반복문
// continue
// break
// for (let i = 1; i <= 9; i++) {
//   if (i % 2 === 1) continue;
//   if (i === 8) break;
//   console.log(i);
// }

// 3번, i, j ,k
// 1중첩 -> 3 o(n)
// 2중첩 -> 3 * 3 = 9 O(n2)
// 3중첩 -> 3 * 3 * 3 = 27 O(n3)
// 4중첩 -> 3 * 3 * 3 * 3 = 81 O(n4)
// O(N * M)
// Big O
let n = 0;
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    for (let k = 1; k <= 3; k++) {
      for (let v = 1; v <= 3; v++) {
        n++;
      }
    }
  }
}
console.log(n);
