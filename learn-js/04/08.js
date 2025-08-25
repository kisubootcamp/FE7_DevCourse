// 연습문제 ++

// 1.
//문자열이 주어졌을 때, 연속된 동일한 문자를 하나의 문자와 그 문자의 개수로 압축해서 반환하는 함수
//예시
/* const i = "aaabbbccc"; 
const o = "a3b3c3"; 

const i2 = "aabbaa";
const o2 = "a2b2a2";

const i3 = "abbbffd";
const o3 = "a1b3f2d1";

const i4 = "aabaa";
const o4 = "a2b1a2"; // a4b1 */

// 2.
//주어진 문자열이 팰린드롬인지 확인하는 함수를 작성하세요. (쉬운버전)
//팰린드롬이란 앞에서부터 읽으나 뒤에서부터 읽으나 같은 문자열을 말합니다.
//대소문자를 구분하지 않으며, 매개변수는 항상 공백 없이 소문자 알파뱃만 넘어온다고 가정합니다.
//예시
/*
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("level"));   // true
console.log(isPalindrome("world"));   // false */

// 3.
//주어진 문자열이 팰린드롬인지 확인하는 함수를 작성하세요. (어려운버전)
//대소문자를 구분하지 않으며, 알파벳 이외의 문자는 무시합니다.
//예시
/* 
console.log(isPalindromeSentence("A man, a plan, a canal, Panama!")); // true
console.log(isPalindromeSentence("Was it a car or a cat I saw?"));  // true
console.log(isPalindromeSentence("Hello, world!"));                  // false
console.log(isPalindromeSentence("No 'x' in Nixon"));                // true */

// 4.
//두 정수를 전달 받아서 최대 공약수를 구하는 함수를 구현하세요.
//최대 공약수는 공통된 약수 중 가장 큰 수를 의미합니다.
//예시
/*
예) 12 - 1, 2, 3, 4, 6 12  
    18 - 1, 2, 3, 6, 9, 18 
약수 : 1, 2, 3, 6 
최대 공약수 6
// 유클리드 호제법 */
/* 
gcd(56, 98); // 14
gcd(101, 10); // 1
gcd(15, 5); // 5
gcd(100, 75); // 25
gcd(18, 24); // 6 */

function gcd(num1, num2) {
  // 1) num1, num2의 약수를 각각 찾음, 2) 공통으로 갖는 약수를 찾음 ,3) 그 중에 가장 큰 것을 출력

  // 1) 약수 찾기
  // num1 보다 작은 수들을 다 곱해서 num1이 되는 경우를 찾음
  // (다중 반복문 지양..) -> 새로운 방법 추가 생각
  let A = [];
  for (let i = 0; i <= num1; i++) {
    for (j = i + 1; j <= num1; j++) {
      if (i * j === num1) A.push(i, j);
    }
  }

  let B = [];
  for (let i = 0; i <= num2; i++) {
    for (j = i + 1; j <= num2; j++) {
      if (i * j === num2) B.push(i, j);
    }
  }

  // 2) 공통으로 갖는 약수
  let c = [];
  for (i = 0; i <= A.length; i++) {
    for (j = 0; j <= B.lengh; j++) {
      if (A[i] === B[j]) c.push(A[i]);
    }
  }

  // 3) 가장 큰 것을 출력

  let Max = c[0];

  for (let i = 0; i <= c.length; i++) {
    if (Max < c[i]) Max = c[i];
  }
  return Max;
  // 실패 :: undefined -> 배열 선언의 스코프 문제
}
console.log(gcd(12, 18)); //6

// 5.
//주어진 배열을 오름차순으로 정렬하는 함수를 작성하시오.
function bubbleSort(array) {
  let newArray = [];
  let first = array[0];

  // 아래 3줄을 반복 :: for문 중첩 ..?
  for (i = 0; i <= array.length; i++) {
    if (first < array[i]) first = array[i];
  }
  newArray.push(first);

  return newArray;
}

console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
