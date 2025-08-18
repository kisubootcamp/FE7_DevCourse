// function stairsGame(stairs) {
//   function rsp(rspResult, c, y) {
//     if (c >= stairs && y < stairs) return 1; // 철수가 계단 게임 최종 승자가 될 경우.
//     if (y >= stairs && c < stairs) return 0; // 영희가 계단 게임 최종 승자가 될 경우.
//     if (y >= stairs && c >= stairs) return 0; // 둘 다 동시에 5계단을 오른 경우.
//     switch (rspResult) {
//       case 2: //철수가 가위바위보 게임 이길 경우
//         c += 2;
//         y -= 1;
//         break;

//       case 1: // 가위바위보 게임 비겼을 경우.
//         c += 1;
//         y += 1;
//         break;

//       case 0: //영희가 가위바위보 게임 이길 경우
//         y += 2;
//         c -= 1;
//         break;
//     }
//     if (c < 0 || y < 0) c < 0 ? (c = 0) : (y = 0); // 계단이 -값이 되는 것을 방지.
//     return rsp(2, c, y) + rsp(1, c, y) + rsp(0, c, y);
//   }
//   return (rsp(2, 0, 1) + rsp(1, 0, 1) + rsp(0, 0, 1)) / 3; //(가위바위보 값, 철수가 오른 계단 수, 영희가 오른 계단 수)
// }
// console.log(stairsGame(5));

function stairGame(n) {
  function play(cs, yh) {
    // cs: 철수의 현재 계단 위치, yh: 영희의 현재 계단 위치
    if (cs < 0 || yh < 0) cs < 0 ? (cs = 0) : (yh = 0); // 계단이 -값이 되는 것을 방지.
    if (cs >= n && yh >= n) {
      return 0;
    } // 동시 도착

    if (cs >= n) {
      return 1;
    } // 철수 도착

    if (yh >= n) {
      return 0;
    } // 영희 도착
    const result =
      play(cs + 2, yh - 1) + play(cs + 1, yh + 1) + play(cs - 1, yh + 2);
    // 각각 철수가 이긴 경우 + 비긴 경우 + 영희가 이긴 경우
    return result;
  }
  return play(0, 1); // 철수는 0계단, 영희는 1계단에서 시작
}

const answer = stairGame(5); // 목표 계단수를 인자로 전달
console.log(answer);
