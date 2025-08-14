// 반복문
// ** 무한루프 (매우) 주의 : 반복문이 끝나지 않는 상황 -> 실서버에 들어가지 않도록 굉장히 주의해야 함
// ㄴ ** 잘 못 배포하면 서버가 다운(로드)되거나 죽어버릴 수 있음

// 1. while문
let i = 1;
while (i <= 9) {
  // **() 안의 조건문이 거짓이 되는 순간이 있는지 스스로 확인하고 실행
  console.log(i);
  i++;
  // console.log(i++); 로 더 간추릴 수 있음
}

// 2. do-while문
// 코드가 한 번은 무조건 실행
// ** 실무에서 거의 사용 X

do {
  console.log(i++);
} while (i <= 9);

//  3. 모든 반복문 -> break, continue
// continue -> 특정 조건을 건너 뛰게 함
// break -> 횟수가 남아도 만나면 반복문을 끝냄

//let i = 0;
while (i <= 9) {
  i++;
  //if (i===4) break; //123
  if (i % 2 === 1) continue; //홀수제외, 02468 -> 왜 246710이지 :: i++이 앞에 있음
  console.log(i);
}

// 추가 continue
// 정의 : 현재 또는 레이블이 지정된 루프의 현재 반복에서
// 명령문의 실행을 종료하고
// 반복문의 처음으로 돌아가여 루프문의 다음 코드를 실행

let text = "";

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }
  text = text + i;
}

console.log(text);
// Expected output: "012456789"

// break와의 차이점 ::
// break -> 반복문 루프를 나감 :: 조건 만족 상관없이 만나면 루프 끝
// continue -> 반복문 루프의 처음으로 돌아감 :: 조건 만족까지 루프 계속 진행
// 결론 :: break는 특정 조건에서 멈출 수 있고,
//     :: continue는 특정 조건을 건너뛰게 함
