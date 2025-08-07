// 반복문 연습문제 - 어려움
// 1.
let n = 10;

function fibo(n) {
  const arr = [0, 1];

  if (n === 1) return [0];

  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }

  return arr;
}

console.log(`피보나치 수열(${n}항):`, fibo(n)); //[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

//

// 2.
const start = 1;
const end = 100; // 범위

// 소수 찾기 코드
function isPrime(number) {
  if (number <= 1) return false;

  for (let i = 2; i * i <= number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

function makePrimeArr(start, end) {
  const primes = [];

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

console.log(makePrimeArr(1, 100)); // [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

//

// 3.
const numbers = [5, 10, 15, 20, 25]; // 배열

// 합 계산 코드
function calcSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
  // return numbers.reduce((acc, num) => acc + num, 0);
}

console.log(calcSum(numbers)); // 75

//

// 4.
let str = "Hello, World!"; // 문자열은 유사 배열

// 문자열 뒤집기 로직
// str = str.split(""); // 문자열을 배열로 변환
// const reversed = str.reverse().join(""); // 배열을 뒤집고 다시 문자열로 변환

// console.log("뒤집힌 문자열:", reversed); // "!dlroW ,olleH"

const strArr = [];

for (let i = str.length - 1; i >= 0; i--) {
  strArr.push(str[i]); // 문자열을 뒤집어서 출력
}

console.log("뒤집힌 문자열:", strArr.join("")); // "!dlroW ,olleH"

//

// 5.
let num = 5; // 예시 숫자

// 팩토리얼 로직
function fact(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(`${num}의 팩토리얼:`, fact(num)); // 출력 120

//

// 6.
const [startNum, endNum] = [100, 999];

// 암스트롱 수 구하기
function isArmstrong(num) {
  const digits = [];

  let numTemp = num;
  while (numTemp > 0) {
    digits.push(numTemp % 10);
    numTemp = Math.floor(numTemp / 10);
  }

  // let sum = digits.reduce((acc, digit) => acc + Math.pow(digit, 3), 0);
  let sum = 0;
  for (let digit of digits) {
    sum += digit * digit * digit;
  }

  return sum === num;
}

function findArmstrongNumbers(start, end) {
  const armstrongNumbers = [];

  for (let i = start; i <= end; i++) {
    if (isArmstrong(i)) {
      armstrongNumbers.push(i);
    }
  }

  return armstrongNumbers;
}

console.log("암스트롱 수:", findArmstrongNumbers(startNum, endNum)); // [153, 370, 371, 407]
