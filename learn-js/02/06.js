// 6. 논리 연산자
// and(&&), or(||), not(!)

/* 용어 정리
 & -> 앤드 기호, 앰퍼샌트
 | -> 짝대기, 파이프
 */

const ex1 = 10 < 20 && 10 < 15; //true
const ex2 = 10 > 20 && 10 < 15; //false
const ex3 = 10 < 20 && 10 < 15 && 10 < 0; // T&&F -> false
// 우선 순위가 같으면 왼 -> 오 로 계산됨
const ex4_1 = 10 < 20 && adsjdkjasdk; //error
const ex4_2 = 10 > 20 && adsjdkjasdk; //false
// 먼저 계산된 애가 거짓으로 판단되어 결론이 났으므로 뒤에건 무시됨 == 효율충

const ex5 = 10 < 0 || 10 < 20; //true
const ex6 = 10 < 20 || sdfksdjfsdfj; //true
// 먼저 계산된 애가 참으로 판단되어 결론이 났으므로 무시

const ex7 = (10 < 20 && 10 < 15) || 10 < 0; //true
const ex7_2 = 10 < 20 && (10 < 15 || 10 < 0); //true

const ex8 = !(10 < 20); //false
const ex9 = !10 < 20; //true
// *주의 : ex8와 ex9 다름
// ex9 -> 10은 true 이므로 false가 됨 -> 0 < 20 -> 트루

//*tip
const x = 10; //true
console.log(!!x); //twice -> 강제로 불리언화 시킬 수 있음
