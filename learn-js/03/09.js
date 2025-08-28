// 연습문제 - 어려움
// 복습완 :: factorial 기억

// 1. 피보나치 수열
const n = 10;
let result = [0, 1];
let a = 0;

for (let i = 0; i < 8; i++) {
  a = result[i] + result[i + 1];
  result.push(a);
}

console.log(`피보나치 수열(${n}항):`, result);
// [ 0, 1,  1,  2,  3, 5, 8, 13, 21, 34 ]

/// *
const nNew = 10;
let aNew = 0; // i항
let b = 1; // (i+1)항
let temp;
const resultNew = [];

for (let i = 0; i < nNew; i++) {
  resultNew.push(aNew); // [0]
  temp = aNew; // temp = 0 (1번항)
  aNew = b; // 다음항으로 넘어감 (2번항)
  b = temp + aNew; //3번항 생성
}
console.log(`피보나치 수열(${nNew}항):`, resultNew);

// *** 2. 소수
let start = 1,
  end = 100; // 범위
const results = [];

for (let i = start; i <= end; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      // 나누어지면 소수가 아님
      // 0이다 = 나누어졌다
      isPrime = false;
      break;
    }
  }

  // 1 is not Prime
  if (isPrime && i != 1) {
    results.push(i);
  }
}

console.log(results); //[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
// 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

// 3. 배열 요소의 합 구하기
const numbers = [5, 10, 15, 20, 25];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  //(<=) X (<) O
  sum += numbers[i];
}

console.log(sum); //75

// 4. 문자열 뒤집기
const str = "Hello, World!";
let strReverse = "";

for (let i = str.length - 1; i >= 0; i--) {
  strReverse += str[i];
}

console.log("뒤집힌 문자열:", strReverse); // "!dlroW ,olleH"

// 5. (*기억) 팩토리얼 (== 반복문의 단골 문제)
let x = 5; // 예시 숫자
let factorial = 1;

for (let i = 1; i <= x; i++) {
  factorial *= i;
}

console.log(`${x}의 팩토리얼:`, factorial); // 출력 120

// 6. **** 암스트롱 수
// 시간 복잡도 증가 때문에 알고리즘 시험에서는 다중 반복문 X
const startAm = 100,
  finishAm = 999;

for (let number = startAm; number <= finishAm; number++) {
  let one = number % 10;
  let ten = ((number - one) / 10) % 10;
  let hundred = (number - ten * 10 - one) / 100;

  let hundredThird = hundred * hundred * hundred;
  let tenThird = ten * ten * ten;
  let oneThird = one * one * one;

  if (hundredThird + tenThird + oneThird === number) console.log(number);
}
