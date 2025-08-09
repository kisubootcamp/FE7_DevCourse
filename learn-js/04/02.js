// 1.
const n = 10; // 10항
let a = 0; // 1, 1
let b = 1; // 0 + 1 => 1 / 1 + 1 => 2
let tmp; // 0 , 1
const result = []; // 0, 1

for (let count = 0; count < n; count++) {
  result.push(a);
  tmp = a;
  a = b;
  b = tmp + b;
}

console.log(result);

// 2.
const primes = [];
let start = 1,
  end = 100; // 범위
for (let number = start; number <= end; number++) {
  let isPrime = true;
  // 2부터 자기 자신의 숫자까지 나누는 것.
  // 나누어지면 소수가 아닌거다.
  // 나머지가 0이면 나누어진거에요.
  for (let divisor = 2; divisor < number; divisor++) {
    if (number % divisor === 0) {
      isPrime = false;
      break;
    }
  }

  // 1은 소수가 아님
  if (isPrime && number != 1) {
    primes.push(number);
  }
}
console.log(primes);

// 3.
const numbers = [5, 10, 15, 20, 25]; // 배열
let sum = 0;

for (const num of numbers) {
  sum += num;
}

console.log(sum); // 75

// 4.
const str = "abc";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
  reversed += str[i];
}
console.log(reversed);

// 5
let c = 5; // 예시 숫자
let factorial = 1;
for (let i = 1; i <= c; i++) {
  factorial *= i; // 1 * 2 * 3 * 4 * 5
}

console.log(`${c}의 팩토리얼:`, factorial); // 출력 120

// 6.
// 100 -> 1, 0, 0
// 150 -> 1, 5, 0
// O(i x j x k)
for (let i = 1; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k < 10; k++) {
      const sum = i * i * i + j * j * j + k * k * k;
      const origin = i * 100 + j * 10 + k;
      if (sum === origin) {
        console.log(origin);
      }
    }
  }
}

// O(n)
// 프로그래머는 수학을 잘해야하나?
for (let i = 100; i < 1000; i++) {
  const one = i % 10; // 999 -> 9
  const ten = ((i - one) / 10) % 10; // 999 - 9 = 990 -> 99
  const hundred = (i - one - ten * 10) / 100; // 999 - 9 - 90 = 900

  if (one * one * one + ten * ten * ten + hundred * hundred * hundred === i) {
    console.log(i);
  }
}
