// 철수와 영희는 가위바위보 게임을 통해 계단을 오르려 한다.
// 5계단을 먼저 오르는 사람이 나오면 게임이 끝나고 최종승자가 된다.
// 가위바위보에서 이기면 2계단을 오르고 비기면 1계단 올라가고 지면 가만히 있는다.
// 영희는 핸디캡으로 1계단 위에서 시작한다.
// 이 게임에서 철수가 이길 수 있는 경우의 수는?

function solution(n) {
  function play(a, b) {
    // a: 철수의 현재 계단 위치, b: 영희의 현재 계단 위치
    if (a >= n && b >= n) {
      return 0;
    } // 동시 도착

    if (a >= n) {
      return 1;
    } // 철수 도착

    if (b >= n) {
      return 0;
    } // 영희 도착

    const result = play(a + 2, b) + play(a + 1, b + 1) + play(a, b + 2);
    // 각각 철수가 이긴 경우 + 비긴 경우 + 영희가 이긴 경우

    return result;
  }

  return play(0, 1); // 철수는 0계단, 영희는 1계단에서 시작
}

const answer = solution(5);
console.log(answer);
