/**
 * 1. 자료형 (Data Type, 값 종류)
 *   1) 기본자료형
 *   1-1) 숫자형        - 10, 20, 30
 *   1-2) 문자열형      - "A", "B", "C"
 *   1-3) 논리형        - true, false
 *   1-4) 심볼형 (ES6)  - Symbol("남기고 싶은 코멘트")
 *   1-5) undefined
 *   1-6) null
 *   1-7) BigInt(ES11)
 * 
 *   2) 참조자료형
 *   2-1) 배열          - [90, 40, 20, 100]
 *   2-2) 객체          - 키(key) + 값(value) = 속성(property) / 키와 값으로 구성된 속성들의 집함         객체의 key 값은 무조건 문자열 형태!
 *                      - { mathScore: 90, engScore: 40, korScore: 20, sienceScore: 100 }
 *   2-3) 함수          - function 함수이름() {}
 */

const mathScore = 90;
const engScore = 40;
const korScore = 20;
const sienceScore = 100;

// 배열로 표현했을 때. 단점으로는 뭐가 무슨 속성인지 모름. 주석처리해야함
const score = [90, 40, 20, 100]; // 수학, 영어, 국어, 과학순
// index, 배열의 요소 첫번째부터 0 부여. 그 뒤로는 1씩 증가.
// index값에 대괄호 연산자로 접근 가능
console.log(score[0]); // 1번째 요소 값을 불러오고 싶을 때 대괄호 연산자 사용
console.log(score[3]); // 4번째 요소 값
console.log(score[100]); // 공간은 선언되어 있지만 값이 없음. undefined 출력됨

// 객체로 표현했을 때. 단점으로는 코드가 길어진다? 그런데 객체값으로 제일 자주 씀
const objScore = { mathScore: 90, engScore: 40, korScore: 20, sienceScore: 100 };
// 대괄호 연산자, 마침표 연산자로 속성값 접근 가능
console.log(objScore[`mathScore`]);
console.log(objScore.mathScore);

// 이렇게 숫자로 적었을 때는 대괄호 연산자로만 접근 가능함
const objScoreEx = { 1: 90, 2: 40, 3: 20, 4: 100 }; // objScoreEx[`1`]

// 잠깐 팁?? 식별자 작성방법
// 1. 파스칼케이스    : 연결된 모든 단어의 첫글자가 대문자. UserName (user + name)       보통 생성자함수 정의할 때
// 2. 스네이크케이스  : 연결된 다음 단어에 _ 붙이기.        user_name
// 3. 케밥케이스      : 연결된 다음 단어에 - 붙이기.        user-name
// 4. 카멜케이스      : 연결된 다음 단어의 첫글자가 대문자. userName                     가장 대중적인 방법
