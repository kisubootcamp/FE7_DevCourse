/*
### 문제 상황

톨게이트가 5개 존재합니다. 이 때 5개의 톨게이트는 통과하는 데에 각각 다른 요금이 필요합니다.

톨게이트를 지나가는 비용은 각각 아래와 같습니다.

- 톨게이트(A): 2,000원
- 톨게이트(B): 2,300원
- 톨게이트(C): 3,000원
- 톨게이트(D): 700원
- 톨게이트(E): 4,000원

톨게이트 직원인 영수는 각각의 사람이 톨게이트를 지나갔을 때, 톨게이트 비용의 총 합을 구하는 업무를 부여받았습니다.

영수를 위해 톨게이트 서버에 입력된 하루 **톨게이트 이용객들의 요금 총액을** 구하는 프로그램을 작성하시오.

### 제한 조건

- 요금은 숫자형으로 출력 됩니다.
- 조건문과 함수 선언을 사용하시오.

*/
function calculateTollFee(tollData) {
  let totalFee = 0;

  for (const toll of tollData) {
    switch (toll) {
      case "A":
        totalFee += 2000;
        break;
      case "B":
        totalFee += 2300;
        break;
      case "C":
        totalFee += 3000;
        break;
      case "D":
        totalFee += 700;
        break;
      case "E":
        totalFee += 4000;
        break;
      default:
        console.log(`알 수 없는 톨게이트: ${toll}`);
    }
  }

  return totalFee;
}
