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
  //if (i===4) break;
  //if (i%2 === 1) continue;
  console.log(i);
}
