//3팀 1번

const arr = [2, 4, 5, 3, 2, 7, 1];

let box = 1;
let weight = 0;

for (const w of arr) {
  if (weight + w > 10) {
    box++;
    weight = w;
  } else {
    weight += w;
  }
}

console.log(`총 ${box}박스가 필요합니다.`);

//3팀 2번

function fishingResult(fishes) {
  const result = {};
  for (const fish of fishes) {
    result[fish] = (result[fish] || 0) + 1;
  }
  return result;
}

console.log(
  fishingResult(["광어", "고등어", "광어", "광어", "우럭", "광어", "광어"])
);
console.log(
  fishingResult([
    "참치",
    "고등어",
    "광어",
    "광어",
    "우럭",
    "광어",
    "우럭",
    "연어",
    "고등어",
    "참치",
    "연어",
    "연어",
    "광어",
    "우럭",
    "참치",
    "고등어",
    "우럭",
  ])
);

//4팀 1번
function checkPasswordStrength(S) {
  if (S.length < 8) return false;
  let hasLower = false;
  let hasUpper = false;
  let hasDigit = false;

  for (let ch of S) {
    if ("a" <= ch && ch <= "z") {
      hasLower = true;
    } else if ("A" <= ch && ch <= "Z") {
      hasUpper = true;
    } else if ("0" <= ch && ch <= "9") {
      hasDigit = true;
    } else {
      return false;
    }
  }

  return hasLower && hasUpper && hasDigit;
}
// 기본 테스트
console.log(checkPasswordStrength("1q2w3e4r")); // false, 대문자가 없음
console.log(checkPasswordStrength("PassWord1234")); // true, 모든 조건 만족
console.log(checkPasswordStrength("Password")); // false, 숫자가 없음
console.log(checkPasswordStrength("PASSWORD123")); // false, 소문자가 없음
console.log(checkPasswordStrength("pass1234")); // false, 대문자가 없음

// 엣지 케이스
console.log(checkPasswordStrength("A1b2C3d4")); // true, 최소 길이 8, 조건 만족
console.log(checkPasswordStrength("Ab1")); // false, 길이 부족
console.log(checkPasswordStrength("")); // false, 빈 문자열
console.log(checkPasswordStrength("12345678")); // false, 알파벳 없음
console.log(checkPasswordStrength("abcdefgh")); // false, 대문자와 숫자 없음

//4팀 2번
function park(parkingLot, desired) {
  const N = parkingLot.length;

  if (parkingLot[desired - 1] === 0) {
    return `${desired}번 자리에 주차 성공!`;
  }

  let bestPos = -1;
  let bestDist = 100;

  for (let i = 0; i < N; i++) {
    if (parkingLot[i] === 0) {
      const dist = Math.abs(i + 1 - desired);
      if (dist < bestDist || (dist === bestDist && i + 1 < bestPos)) {
        bestDist = dist;
        bestPos = i + 1;
      }
    }
  }

  if (bestPos === -1) {
    return "주차 불가!";
  }
  return `${bestPos}번 자리를 추천합니다.`;
}
