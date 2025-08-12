// 1. 피보나치 수열
const n = 10; // 10항
let a = 0;
let b = 1; // 0 + 1 => 1
let tmp;
const result = []; // 0

for (let count = 0; count < n; count++) {
    result.push(a);
    tmp = a;
    a = b;
    b = tmp + b;
}

console.log(result);

// 2. 소수 찾기
const primes = [];
const start = 2;
const end = 100;
for (let i = start; i <= end; i++) {
    let isPrime = true;
    // 2부터 자기 자신의 숫자까지 나누는 것.
    // 나누어지면 소수가 아닌 거다.
    // 나머지가 0이면 나누어진 거에요.
    for (let divisor = 2; divisor < numbers; divisor++) {
        if (number % divisor === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primes.push(number);
    }
    // 1은 소수가 아님
    // if (isPrime && number != 1) {
    //     primes.push (number);
    // }
}
console.log(primes);

// 3. 배열 요소의 합 구하기
const numbers = [5, 10, 15, 20, 25];
let sum = 0;

for (const num of numbers) {
    sum += num;
}
console.log(sum);

// 4. 문자열 뒤집기
const str = "abc";
console.log(str[3]);
console.log(str.length); // 3
let reversed = "";
for (let i = str.length.length-1; i >= 0; i--) {
    // console.log(str[i]); // 0, 1, 2 || 2, 1, 0
    reversed += str[i];
}
console.log(reversed);

// 5. 특정 숫자까지의 곱 계산
let c = 5; // 예시 숫자
let factorial = 1;
for (let i = 1; i <= c; i++) {
    factorial *= i; // 1 * 2 * 3 * 4 * 5
}
console.log(factorial);

// 6. 암스트롱수
for (let i = 1; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
            console.log(i, j, k);
            const sum = i * i * i + j * j * j + k * k * k;
            const origin = i * 100 + j * 10 + k;
            if (sum === origin) {
                console.log(origin);
            }
        }
    }
}

// O(n)
for (let i = 100; i < 1000; i++) {
    const one = i % 10;
    const ten = ((i - one) / 10) % 10;
    const hundred = ((i - one - ten * 10)) / 100;

    if (one * one * one + ten * ten * ten + hundred * hundred * hundred === i) {
        console.log(i);
    }
}