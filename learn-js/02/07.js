/* 

삼항 연산자
표현식 ? 참 : 거짓

: (콜론)
; (세미콜론)

*/

const myMoney = 5000;
const price = 3000;

const buyAble = myMoney >= price ? "살 수 있다" : "살 수 없다";
console.log(buyAble);

// 중첩해버리기~
const score = 40;
const grade = 
    score >= 90 
        ? "A" 
        : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F"; // 엄청나게 중첩이 가능... 근데 보기가 싫죠? 실무에서는 2중첩이상 하지않습니다.
console.log(grade)




// 연습문제쓰
/* 
1. 숫자비교
    1. 변수 `num`에 임의의 숫자를 할당하세요.
    2. `num`이 0보다 큰지, 0인지, 0보다 작은지 삼항 연산자를 사용하여 각각 "Positive", "Zero", "Negative"를 출력하세요.
 */
const num = 2;
const answer1 = num > 0  ? "Positive" : (num === 0 ? "Zero" : "Negative");
console.log("answer1");

/*
2. 최댓값 찾기
- 세 변수 `a`, `b`, `c`에 임의의 숫자를 할당하세요.
- 삼항 연산자를 사용하여 `a`, `b`, `c` 중 가장 큰 숫자를 찾고, 그 결과를 출력하세요.
 */
const a = 60;
const b = 50;
const c = 11;
let biggestNum;
let midNum;
let smallestNum;
const answer2 = a > b ? (a > c ? "a" : "c") : (b > c ? "b" : "c");
console.log(answer2);

/* 
3. 짝수 홀수 확인 

- 변수 `number`에 임의의 숫자를 할당하세요. (0과 음수는 고려하지 않습니다)
- 삼항 연산자를 사용하여 `number`가 짝수인지 홀수인지 확인하고, "Even" 또는 "Odd"를 출력하세요.
 */
const number = 20;
const answer3 = number%2 === 0 ? "Even" : "Odd";
console.log(answer3);

/* 
4. 로그인 확인 

- 변수 `isLoggedIn`에 `true` 또는 `false`를 할당하세요.
- 삼항 연산자를 사용하여 `isLoggedIn`이 `true`이면 "Welcome", `false`이면 "Please log in"을 출력하세요.
 */
const isLoggedIn = true;
// const isLoggedIn = 1;
const answer4 = isLoggedIn ? "Welcome" : "Please log in";
console.log(answer4);
// 0, false, null, undefined가 아니면 모두 참으로 간주함

/* 
5. 성인 확인
- 변수 `age`에 임의의 나이를 할당하세요.
- 삼항 연산자를 사용하여 `age`가 18 이상이면 "Adult", 그렇지 않으면 "Minor"를 출력하세요.
 */
const age = 29;
const answer5 = age >= 18 ? "Adult" : "Minor";
console.log(answer5);