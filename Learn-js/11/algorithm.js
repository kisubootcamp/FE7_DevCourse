/* ---------------------------------------------------------------------------------------- */
// 1조
// 1. 길찾기
/* 
2차원 좌표 상에서 살아가는 코쓱이는 집에서 공원까지 걸어가려고 합니다.
오른쪽 방향으로 한 칸 혹은 위쪽 방향으로 한 칸 움직일 수 있습니다.
집과 공원의 좌표가 각각 주어진다고 가정했을 때 코쓱이가 오른쪽 혹은 위쪽으로 한 칸씩 움직여 공원에 도착하는 방법의 경우의 수를 구하세요.
*/
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return factorial(n - 1) * n;
}

function countPaths(arr1, arr2) {
  const [x1, y1] = arr1;
  const [x2, y2] = arr2;

  const dx = x2 - x1;
  const dy = y2 - y1;

  let result = factorial(dx + dy) / factorial(dx) / factorial(dy);
  return result;
}

console.log(countPaths([0, 0], [2, 1])); // 3
console.log(countPaths([1, 2], [4, 5])); // 20
console.log(countPaths([3, 3], [3, 3])); // 1

// 2. 소수이면서 홀수인 정수 찾기
// 임의의 숫자가 주어질 때 이 중 소수이면서 홀수에 해당하는 정수들의 값을 구하시오.
function checkPrimeOdd() {
  let result = [];

  // 소수인지 판별하는 함수 (소수일 경우 true 반환, 아닐 경우 false 반환)
  // num은 동적으로 할당 되어야 합니다.
  function is_prime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true; // true, false 둘 중 하나를 반환할 것
  }

  // num은 1부터 num의 범위까지를 표현 (즉 num = 100일 경우, 1~100까지 검색)
  return function checkOdd(num) {
    for (let i = 1; i <= num; i++) {
      if (is_prime(i) && i % 2 !== 0) {
        result.push(i);
      }
    }
    // 결과 값은 배열로 작성된 result 값으로 반환
    return result;
  };
}

function solution() {
  return checkPrimeOdd();
}

const primeOdd = solution();
console.log(primeOdd(100));

/* ---------------------------------------------------------------------------------------- */
// 3조
// 1. 박스에 물건 포장하기
/* 
📌 문제 상황 설명
물건이 n개 있을 때, 각각 물건의 무게(kg)는 배열로 표시할 수 있다.
상자 하나 당 10kg 까지의 무게만 담을 수 있다고 한다면, 박스는 몇 개 필요할지 계산해본다.

📌 입출력 예시
// input
items = [2, 4, 5, 3, 2, 7, 1]

// output
총 3박스가 필요합니다.

📌 해결 조건 및 제약 사항
- 상자의 개수는 무한하며, 각 상자의 무게는 10kg를 초과할 수 없다.
- 무게 계산은 “순차적”으로 진행한다.
*/
function solution() {
  const items = [2, 4, 5, 3, 2, 7, 1];
  let box = 0;
  let sum = 0;
  for (const key of items) {
    sum += key;
  }
  box = Math.ceil(sum / 10);

  return console.log(`총 ${box}가 필요합니다.`);
}
solution();

// 2. 낚시 결과 압축
/* 
📌 문제 상황 설명
낚시 미니게임을 개발하려고 합니다.
플레이어가 낚시를 마치고 마을로 돌아올 때 마다, 낚은 물고기의 목록이 배열 형태로 클라이언트 내부에 기록됩니다.
이 데이터를 서버로 보내기 전에, 서버의 부하를 줄이기 위해 클라이언트에서 물고기 종류별로 개수를 합산한 뒤 전송해야 합니다.
물고기의 이름과 해당 물고기의 총 개수를 객체 형태로 출력하는 프로그램을 작성하세요.

📌 입출력 예시
<입력 예시>
fishingResult(['광어', '고등어', '광어', '광어', '우럭', '광어', '광어']);
fishingResult(['참치', '고등어', '광어', '광어', '우럭', '광어', '우럭', 
'연어', '고등어', '참치', '연어', '연어', '광어', '우럭', '참치', '고등어', '우럭']);

<출력 예시>
{ '광어': 5, '고등어': 1, '우럭': 1 }
{ '참치': 3, '고등어': 3, '광어': 4, '우럭': 4, '연어': 3 }

📌 해결 조건 및 제약 사항
- 입력 배열에는 문자열만 포함됩니다.
- 출력은 물고기 이름을 Key로, 개수를 Value로 가지는 객체 형태여야 합니다.
- 빈 배열이 입력될 경우, 빈 객체를 반환해야 합니다.
*/
function fishingResult(arr) {
  const result = {};
  for (const key of arr) {
    if (result[key] === undefined) result[key] = 1;
    else result[key]++;
  }

  return console.log(result);
}

fishingResult(["광어", "고등어", "광어", "광어", "우럭", "광어", "광어"]); // { '광어': 5, '고등어': 1, '우럭': 1 }
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
]);

/* ---------------------------------------------------------------------------------------- */
// 4조
// 1. 비밀번호 보안 강도 검사
/*
 비밀번호 생성 규칙

1. 비밀번호는 알파벳 소문자, 대문자, 숫자로만 이루어져 있다.
2. 비밀번호는 최소 8글자 이상이어야 한다.
3. 숫자를 최소 1개 포함해야 한다.
4. 알파벳 소문자를 최소 1개 포함해야 한다.
5. 알파벳 대문자를 최소 1개 포함해야 한다.

머쓱이는 문자열 `S`를 비밀번호로 사용하려고 한다.

문자열 `S`가 위 규칙을 모두 만족하는지 확인하는 함수를 작성하시오.
*/

function passWord(str) {
  const length = str.length;

  // 1. 비밀번호는 알파벳 소문자, 대문자, 숫자로만 이루어져 있다.
  //    다른 문자가 포함되어 있으면 false
  const allowedChars = /^[a-zA-Z0-9]*$/;
  if (!allowedChars.test(str)) {
    return "허용되지 않는 문자가 포함되어 있습니다 (알파벳, 숫자만 가능).";
  }

  // 2. 비밀번호는 최소 8글자 이상이어야 한다.
  if (length < 8) {
    return "비밀번호는 최소 8글자 이상이어야 합니다.";
  }

  // 3. 숫자를 최소 1개 포함해야 한다.
  const hasNum = /[0-9]/.test(str);
  if (!hasNum) {
    return "숫자를 최소 1개 포함해야 합니다.";
  }

  // 4. 알파벳 소문자를 최소 1개 포함해야 한다.
  const hasLow = /[a-z]/.test(str);
  if (!hasLow) {
    return "알파벳 소문자를 최소 1개 포함해야 합니다.";
  }

  // 5. 알파벳 대문자를 최소 1개 포함해야 한다.
  const hasUpp = /[A-Z]/.test(str);
  if (!hasUpp) {
    return "알파벳 대문자를 최소 1개 포함해야 합니다.";
  }

  // 모든 조건을 만족하면 '성공' 반환
  return "성공";
}

console.log(passWord("1q2w3e4r")); // false, 대문자가 없음
console.log(passWord("PassWord1234")); // true, 모든 조건 만족
console.log(passWord("Password")); // false, 숫자가 없음
console.log(passWord("PASSWORD123")); // false, 소문자가 없음
console.log(passWord("pass1234")); // false, 대문자가 없음

// 엣지 케이스
console.log(passWord("A1b2C3d4")); // true, 최소 길이 8, 조건 만족
console.log(passWord("Ab1")); // false, 길이 부족
console.log(passWord("")); // false, 빈 문자열
console.log(passWord("12345678")); // false, 알파벳 없음
console.log(passWord("abcdefgh")); // false, 대문자와 숫자 없음

// 2. 주차 자리 찾기
/* 
문제 설명
  - 어떤 주차장은 1번부터 N번까지 번호가 붙어 있으며, 배열로 상태가 주어집니다.
  - 원소 값은 0(빈 자리), 1(이미 주차됨)을 의미합니다.
  - 사용자가 입력한 원하는 자리 번호 desired가 비어 있으면 즉시 그 자리에 주차합니다.
  - 원하는 자리가 차 있으면, desired로부터의 거리 |position - desired|가 가장 가까운 빈 자리를 찾아 추천합니다.
  - 거리가 같은 빈자리가 양쪽에 있으면 왼쪽(번호가 더 작은 자리)을 우선 추천합니다.
  - 빈 자리가 전혀 없으면 "주차 불가!"를 출력합니다.

문제 조건
  입력
    - 주차장의 길이 N은 1 이상 100 이하.
    - parkingLot는 길이 N의 1차원 배열이며 각 원소는 0 또는 1.
    - 원하는 자리 번호 desired는 1 이상 N 이하의 정수.

  출력
    - 원하는 자리가 비어 있으면: "[desired]번 자리에 주차 성공!"
    - 원하는 자리가 차 있으면: "[가장 가까운 빈자리 번호]번 자리를 추천합니다."
    - 빈자리가 전혀 없으면: "주차 불가!"
    - 문자열 형식(공백/문장부호 포함)은 정확히 일치해야 합니다.

  규칙/판정 기준
    - 자리 번호는 1 ~ N.
    - 거리 정의: |position - desired|.
    - 선택 규칙: 최소 거리 우선 → 동일 거리면 왼쪽(번호가 작은 자리) 우선.

  엣지 케이스
    - N = 1인 최소 크기.
    - 모든 자리가 찬 경우.
    - 원하는 자리가 처음부터 비어 있는 경우.
    - 동일 거리의 양쪽 빈자리 존재(왼쪽 우선).

  성능/제약
    - 시간 복잡도: O(N) (한 번의 선형 탐색).
    - 공간 복잡도: O(1) (추가 배열 미사용).
    - 반복문 최대 실행 횟수: N.
*/
function findParkingSpot(parkingLot, desired) {
  const N = parkingLot.length;
  const desiredIndex = desired - 1;

  if (parkingLot[desiredIndex] === 0) {
    return `${desired}번 자리에 주차 성공!`;
  }

  for (let distance = 1; distance < N; distance++) {
    const leftIndex = desiredIndex - distance;
    const rightIndex = desiredIndex + distance;

    let foundSpot = -1;

    if (leftIndex >= 0 && parkingLot[leftIndex] === 0) {
      foundSpot = leftIndex + 1;
    }

    if (rightIndex < N && parkingLot[rightIndex] === 0) {
      if (foundSpot === -1) {
        foundSpot = rightIndex + 1;
      }
    }

    if (foundSpot !== -1) {
      return `${foundSpot}번 자리를 추천합니다.`;
    }
  }

  return "주차 불가!";
}

console.log(findParkingSpot([1, 0, 0, 1, 0, 1, 1, 0, 1, 0], 4));

/* ---------------------------------------------------------------------------------------- */
// 5조
// 1. 톨게이트 비용 구하기
/* 
톨게이트가 5개 존재합니다. 이 때 5개의 톨게이트는 통과하는 데에 각각 다른 요금이 필요합니다.
톨게이트를 지나가는 비용은 각각 아래와 같습니다.

- 톨게이트(A): 2,000원
- 톨게이트(B): 2,300원
- 톨게이트(C): 3,000원
- 톨게이트(D): 700원
- 톨게이트(E): 4,000원

톨게이트 직원인 영수는 각각의 사람이 톨게이트를 지나갔을 때, 톨게이트 비용의 총 합을 구하는 업무를 부여받았습니다.
영수를 위해 톨게이트 서버에 입력된 하루 **톨게이트 이용객들의 요금 총액을** 구하는 프로그램을 작성하시오.
*/
function tollgate(obj) {
  const tollgate = {
    tollgateA: 2000,
    tollgateB: 2300,
    tollgateC: 3000,
    tollgateD: 700,
    tollgateE: 4000,
  };
  let result = 0;
  for (const key in obj) {
    result += tollgate[obj[key]];
  }
  return console.log(result);
}

tollgate({ 상윤: "tollgateA", 준영: "tollgateB", 주원: "tollgateC" });
tollgate({
  레나: "tollgateA",
  선혜: "tollgateC",
  기수: "tollgateC",
  프그: "tollgateE",
});
tollgate({ 네이버: "tollgateA", 카카오: "tollgateA", 라인: "tollgateA" });

// 2. 계단오르기 게임
/* 
철수와 영희는 가위바위보 게임을 통해 계단을 오르려 한다.
5계단을 먼저 오르는 사람이 나오면 게임이 끝나고 최종승자가 된다.
계단을 오를 수 있는 경우의 수는 다음과 같다.

  - 가위바위보를 이기면 : 2계단 상승
  - 가위바위보를 비기면 : 1계단 상승
  - 가위바위보를 지면 :  그 자리 유지.

**참고사항**
  - 영희는 어드밴티지로 1계단 위에서 시작한다.
  - 철수가 시작하는 위치 이하로 내려갈 수 없다. (영희 포함.)
  - 철수와 영희가 같은 턴에 5번째 계단에 도착하는 경우는 “철수가 이기는 경우의 수”에 포함하지 않는다.
*/

/* ---------------------------------------------------------------------------------------- */
// 6조
// 1. 일제 강점기 속 독립을 꿈꾸며 획득한 아이템을 등록하고, 모아진 기록을 통해 최종적으로 광복의 성패가 결정됩니다.
/* 
  - `"태극기"`를 얻으면 애국 의지가 +1 됩니다.
      - 애국 의지가 5 이상이 되면 광복 성공입니다.
  - `"독립운동 시도"`를 하면 활동 횟수가 +1 됩니다.
      - 활동 횟수가 2 이상이 되면 광복 성공입니다.
  - `"일장기"`가 늘어나면 통제 강도가 +1 됩니다.
      - 통제 강도가 3 이상이 되면 광복 실패입니다.
  - `"일본순사"`를 만나면 바로 광복 실패입니다.
  - 이 외의 문자열은 특별한 영향이 없습니다.
*/
function play(arr) {
  let patriotic = 0;
  let japan = 0;
  let movement = 0;
  for (const key of arr) {
    switch (key) {
      case "태극기":
        patriotic++;
        console.log(`태극기를 획득했습니다! (현재 ${patriotic})`);
        if (patriotic >= 5) {
          console.log("광복 성공! 축하합니다!");
          return;
        }
        break;
      case "일장기":
        japan++;
        console.log(`일장기를 획득했습니다... (현재 ${japan})`);
        if (japan >= 3) {
          console.log("광복 실패... 다시 도전하세요.");
          return;
        }
        break;
      case "독립운동 시도":
        movement++;
        console.log(`태극기를 획득했습니다! (현재 ${patriotic})`);
        if (movement >= 2) {
          console.log("광복 성공! 축하합니다!");
          return;
        }
        break;
      case "일본순사":
        console.log("일본 순사에게 꼰지름! 바로 광복 실패...");
        return;
      default:
        console.log(
          "종류는 “태극기”, “일장기”, “독립운동 시도”, “일본순사” 중 하나입니다."
        );
        break;
    }
  }
}

play(["태극기", "태극기", "태극기", "태극기", "태극기"]);
play(["일장기", "일장기", "일장기"]);
play(["태극기", "일본순사", "태극기"]);

// 2. 마트 할인
/* 마트는 다음과 같이 할인합니다.

- 모든 주말: 5% 할인
- 2번째 주와 4번째 주의 모든 요일: 추가 5% 할인
- 그 외 날짜는 할인 없음

입력으로 `day, price`를 받아 위 규칙을 적용한 할인된 금액을 출력하세요. */
function discountCalculator(day, price) {
  let week = Math.ceil(day / 7); // 주차 구하기
  let weekday = (day - 1 + 5) % 7; // 0: 일, 1: 월 ... 6: 토 (1일은 금요일)

  let discount = 0;
  if (weekday === 0 || weekday === 6) {
    discount += 5;
  }

  if (week === 2 || week === 4) {
    discount += 5;
  }

  let finalPrice = price * (1 - discount / 100);
  console.log(
    `${day}일 (${
      ["일", "월", "화", "수", "목", "금", "토"][weekday]
    }) → 최종 ${finalPrice}원 (총 ${discount}% 할인)`
  );
  return finalPrice;
}

discountCalculator(23, 10000);
discountCalculator(6, 10000);
discountCalculator(31, 10000);
discountCalculator(12, 10000);

/* ---------------------------------------------------------------------------------------- */
// 7조
// 1. 회원 관리 시스템
/* 
  회원 등록, 삭제, 조회 기능이 있는 프로그램을 작성하세요. 
  회원 등록 시 id, 이름, 나이의 정보를 입력받아 회원 정보 배열에 저장합니다.
  회원 삭제 시 id를 입력 받아 회원 정보를 삭제합니다.
  회원 조회 시 모든 회원의 정보가 들어있는 회원 정보 배열을 반환합니다.
*/
class MemberManager {
  constructor() {
    this.members = [];
  }

  addMember(id, name, age) {
    if (this.members.some((m) => m.id === id)) {
      console.log("이미 존재하는 아이디입니다.");
      return;
    }
    this.members.push({ id, name, age });
  }

  deleteMember(id) {
    const index = this.members.findIndex((m) => m.id === id);
    if (index === -1) {
      console.log("존재하지 않는 id입니다.");
      return;
    }
    this.members.splice(index, 1);
  }

  get getMembers() {
    return this.members;
  }
}

const m = new MemberManager();

m.addMember(1, "jane", 25);
console.log(m.getMembers); // [ { id: 1, name: 'jane', age: 25 } ]
m.deleteMember(1);
m.deleteMember(1); // 존재하지 않는 id입니다.

// 2. 고속버스 요금 계산기
/* 
고속버스 요금체계의 경우 좌석 등급과 승객의 나이, 운행시간에 따라 나뉩니다.

예를 들어 서울에서 부산으로 여행을 갈 때, 아래의 요금표와 동일합니다.

|         |    대인   |   소인   |
|   ---   |    ---    |   ---   |
| 일반     | 26,700원 | 13,400원 |
| 우등     | 39,700원 | 19,900원 |
| 프리미엄 | 43,900원 | 25,800원 |

단, 심야 시간대(22시 ~ 04시) 운행 시 요금의 20% 할증이 적용됩니다.

승객의 나이와 버스의 운행시간, 등급을 입력했을 때 자동으로 요금을 계산하여 출력해주는 스크립트를 작성하세요.
*/
class Ticket {
  constructor(age, grade, time) {
    this.age = age;
    this.grade = grade;
    this.time = time;
    if (!["일반", "우등", "프리미엄"].includes(grade)) {
      throw new Error("등급은 '일반', '우등', '프리미엄' 중 하나여야 합니다.");
    }
    if (time < 0 || time > 23) {
      throw new Error("시간은 0시부터 23시 이내로 숫자로 작성해주세요");
    }
  }
  calcFare() {
    const prices = {
      일반: { adult: 26700, child: 13400 },
      우등: { adult: 39700, child: 19900 },
      프리미엄: { adult: 43900, child: 25800 },
    };
    const type = this.age >= 14 ? "adult" : "child";
    let fare = prices[this.grade][type];

    if (this.time >= 22 || this.time <= 4) {
      fare *= 1.2;
    }

    return Math.round(fare);
  }
}

const t1 = new Ticket(28, "우등", 23);
const t2 = new Ticket(12, "일반", 21);
const t3 = new Ticket(14, "프리미엄", 2);

console.log(t1.calcFare()); // 47640
console.log(t2.calcFare()); // 13400
console.log(t3.calcFare()); // 52680
