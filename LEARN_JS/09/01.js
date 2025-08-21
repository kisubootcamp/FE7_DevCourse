let korea = 0;
let japan = 0;
let tryCount = 0;

function play(items) {
  for (const item of items) {
    if (item === "태극기") {
      korea++;
      console.log(`태극기를 획득했습니다! (현재 ${korea}개)`);
      if (korea >= 5) {
        console.log("광복 성공! 축하합니다!");
        return;
      }
    } else if (item === "일장기") {
      japan++;
      console.log(`일장기를 획득했습니다... (현재 ${japan}개)`);
      if (japan >= 3) {
        console.log("광복 실패... 다시 도전하세요.");
        return;
      }
    } else if (item === "독립운동 시도") {
      tryCount++;
      console.log(`독립운동 시도를 했습니다! (현재 ${tryCount}회)`);
      if (tryCount >= 2) {
        console.log("독립운동의 힘으로 광복 성공!");
        return;
      }
    } else if (item === "일본순사") {
      console.log("일본 순사에게 꼰지름! 바로 광복 실패...");
      return;
    }
  }
  console.log("광복 실패... 조건을 달성하지 못했습니다.");
}

play(["태극기", "태극기", "태극기"]);
play(["독립운동 시도", "독립운동 시도"]);
