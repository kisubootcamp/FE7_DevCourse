/*
//[연습문제 - 1부터 9까지 출력하기]
*/
for (let i = 1; i <= 9; i++) {
  console.log(i);
}
/*
//[연습문제 - 1부터 9까지의 합 출력하기]
*/

let sum = 0;
for (let i = 1; i <= 9; i++) {
  sum += i;
}
console.log(sum);
/*
[연습문제 - 1부터 100까지 짝수만 출력하기]
*/
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
/*
[연습문제 - 음수 걸러내기]

배열에 음수값이 섞여있습니다. 
음수는 제외하고 양수들만 골라내어 합을 구하세요.

*/
const numbers = [1, -2, 3, -4, 5, -6, 7, -8, 9];
let positiveSum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveSum += numbers[i];
  }
}
console.log(positiveSum);
/*
[연습문제 - 홀짝 구분하기]

0부터 15까지 출력하면서 각각의 수가 짝수인지 홀수인지
구분하여 출력하도록 코드를 작성해주세요.

출력 예시 ) 
0 짝수 
1 홀수
2 짝수
3 홀수
4 짝수
... 중략 .. 
15 홀수
*/
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " 짝수");
  } else {
    console.log(i + " 홀수");
  }
}
/*
주어진 숫자 배열의 최댓값 찾기 
const numArr = [7, 2, 9, 4, 5];
*/
const numArr = [7, 2, 9, 4, 5];
let maxNum = numArr[0];
for (let i = 1; i < numArr.length; i++) {
  if (numArr[i] > maxNum) {
    maxNum = numArr[i];
  }
}
console.log(maxNum);

/*
// 짝수 인덱스의 요소만 새로운 배열 담기
// 배열의 .push() 메서드를 사용하세요.
const arr = ['a', 'b', 'c', 'd', 'e']
*/
const arr = ["a", "b", "c", "d", "e"];
const evenIndexArr = [];
for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    evenIndexArr.push(arr[i]);
  }
}
console.log(evenIndexArr);
/*
// 구구단 3단 출력하기

*/
const dan = 3;
for (let i = 1; i <= 9; i++) {
  console.log(`${dan} x ${i} = ${dan * i}`);
}

/*
2항: [0, 1] 

3항: [0, 1, 1]

4항:[0, 1, 1, 2] 

5항:[0, 1, 1, 2, 3 ]

### 1. 피보나치 수열 계산

피보나치 수열의 특정 항까지 계산하는 예제입니다.

- **문제**: 주어진 정수 N에 대해, 피보나치 수열의 처음 N항을 출력하는 프로그램을 작성하시오.
- **입력**: N (정수, 1 이상)
- **출력**: 피보나치 수열의 처음 N항을 배열로 출력.
- 조건: 1항은 0, 2항은 1 이라고 가정합니다.
- **예시**:
    - **입력**: 10
    - **출력**: `[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]`
- **설명**: 피보나치 수열은 앞의 두 수의 합으로 다음 수를 생성하는 수열이다. 첫 두 항은 0과 1이다.
*/

// 피보나치 수열의 N항까지 계산하는 함수
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib.slice(0, n);
}

/*
### 2. 소수 찾기

- **문제**: 1부터 100까지의 소수를 찾아 출력하는 프로그램을 작성하시오.
- **입력**: 없음
- **출력**: 1부터 100까지의 소수를 배열로 출력.
- **예시**:
    - **출력**: `[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]`
- **설명**: 소수는 1과 자신만을 약수로 가지는 자연수이다. 이 프로그램은 2부터 100까지의 숫자 중 소수를 찾는다.

*/
function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function findPrimes(limit) {
  const primes = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }
  return primes;
}

/*
### 3. 배열 요소의 합 구하기

- **문제**: 주어진 숫자 배열의 모든 요소의 합을 계산하는 프로그램을 작성하시오.
- **입력**: `numbers` (배열, 예: `[5, 10, 15, 20, 25]`)
- **출력**: 배열 요소의 합.
- **예시**:
    - **입력**: `[5, 10, 15, 20, 25]`
    - **출력**: `75`
- **설명**: 이 프로그램은 배열의 각 요소를 순회하며 합을 계산한다.
*/
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
// 예시 실행
console.log(sumArray([5, 10, 15, 20, 25])); // 75

/*
### 문자열 뒤집기

- **문제**: 주어진 문자열을 뒤집어서 출력하는 프로그램을 작성하시오.
- **입력**: `str` (문자열, 예: `"Hello, World!"`)
- **출력**: 뒤집힌 문자열.
- **예시**:
    - **입력**: `"Hello, World!"`
    - **출력**: `"!dlroW ,olleH"`
- **설명**: 문자열을 끝에서부터 시작하여 차례로 각 문자를 추가하여 새로운 문자열을 만든다

*/
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
// 예시 실행
console.log(reverseString("Hello, World!")); // "!dlroW ,olleH"

/*
### 특정 숫자까지의 곱 계산

5! → 5 * 4 * 3 * 2 * 1

4! → 4 * 3 * 2 * 1

2! ⇒ 2 * 1 

1! → 1

0! → 1

- **문제**: 주어진 정수 N의 팩토리얼을 계산하는 프로그램을 작성하시오.
- **입력**: N (정수, 1 이상)
- **출력**: N의 팩토리얼.
- **예시**:
    - **입력**: `5`
    - **출력**: `120`
*/
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
// 예시 실행
console.log(factorial(5)); // 120

/*
1. 암스트롱수 
- **문제**: 100부터 999까지의 세 자리 정수 중 암스트롱 수를 구해서 출력하세요.
- **입력**: 없음
- **출력**: 153, 370, 371, 407
- **예시**:
    - **입력**: 없음
    - **출력**

*/
function isArmstrong(num) {
  const strNum = num.toString();
  const length = strNum.length;
  let sum = 0;

  for (let i = 0; i < length; i++) {
    sum += Math.pow(parseInt(strNum[i]), length);
  }

  return sum === num;
}
function findArmstrongNumbers() {
  const armstrongNumbers = [];
  for (let i = 100; i <= 999; i++) {
    if (isArmstrong(i)) {
      armstrongNumbers.push(i);
    }
  }
  return armstrongNumbers;
}
// 예시 실행
console.log(findArmstrongNumbers()); // [153, 370, 371, 407]
