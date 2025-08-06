/* 

논리 연산자 

& -> 앤드기호, 앰퍼센드
| -> 짝대기(비공식), 파이프
&& 앤드연산자
|| 오알연산자
!  부정연산자

*/

const ex1 = 10 < 20 && 10 < 15; // true && true => true
const ex2 = 10 > 20 && 10 < 15; // false && true => false
const ex3 = 10 < 20 && 10 < 15 && 10 < 0; // 연산자 우선순위가 같으면 왼쪽에서 오른쪽으로 진행. true && true && false => ture && false => false
// const ex4 = 10 < 20 && dasdsafsda; // 이렇게 하면은 실행이 안됨 오류가남
const ex4 = 10 > 20 && dasdsafsda; // 근데 얘는 실행이 됨 ㄷㄷ... 앞에가 거짓이라 &&연산 값은 이미 정해져있다. 뒤에는 보지도 않음. 그래서 false

const ex5 = 10 < 0 || 10 < 20; // false || true => 둘중에 하나만 true여도 됨. true
const ex6 = 10 < 20 || dsfsdafsafsd; // 이거도 실행이 됨 앞에가 참이라서

const ex7 = 10 < 20 && 10 < 15 || 10 < 0; // &&, ||는 순위가 같아서 왼쪽에서 오른쪽으로 진행됨. 결과적으로 true
// 소괄호 치시는게 좀더 가독성이 좋습니다
// const ex7 = (10 < 20 && 10 < 15) || 10 < 0;

const ex8 = !(10 < 20); // false
const ex9 = !10 < 20; // 이게 오ㅐ true ?   !10 => 이게 0이 되나봐룡
// false가 비교연산자를 만나면 암묵적으로 0으로 취급이 된다고 합니다

// 팁!
const x = 10;
// x가 논리형이 아니지만 참, 거짓 값으로 취급해야할 경우가 있음
// 부정연산자는 어떠한 변수라도 강제로 boolean화 시키는 특성이 있음
console.log(!x); // 한번 붙이면 false 나옴
console.log(!!x); // 두번 붙이면 true 나옴! 