// 무한 루프 ( 주의 !!)
// while (true) {

// }

// let i = 10;
// while (i <= 9) {
//   console.log(i);
//   i++;
// }

// let i = 10;
// do {
//   console.log(i);
//   i++;
// } while (i <= 9);

// break, continue
let i = 1;
while (i <= 9) {
  i++;
  if (i === 3) continue;
  if (i === 4) break;
  console.log(i);
}
