// 1. 피보나치 수열 계산
const N = 10;
let arr = [];
for (let i = 0; i < N; i++) {
    if (i == 0) {
        arr.push(0);
    } else if (i == 1) {
        arr.push(1);
    } else {
        arr.push(arr[i-2] + arr[i-1]);
    }
}
console.log(arr);

// 2. 소수 찾기
let start = 1, end = 100; // 범위
let arr2 = [];
for (let i = start; i <= end; i++) {
    if (i == 1) continue;
    let flag = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            flag = false;
            break;
        }
    }
    if (flag) {
        arr2.push(i);
    }
}
console.log(arr2);

// 3. 배열 요소의 합 구하기
const numbers = [5, 10, 15, 20, 25]; // 배열
let sum = 0;
for (item of numbers) {
    sum += item;
}
console.log(sum);

// 4. 문자열 뒤집기

const str = "Hello, World!";
let str2 = "";

for (let i = str.length-1; i >= 0; i--) {
    str2 += str[i];
}
console.log(str2);

// 5. 특정 숫자까지의 곱 계산
let n = 5;
let fact = 1;
while (n > 0) {
    fact *= n;
    n--;
}
console.log(fact);

// 6. 암스트롱수
for (let i = 100; i <= 999; i++) {
    if ((Math.floor(i / 100))**3 + (Math.floor(i%100/10)) **3 + (i % 10) **3 === i) {
        console.log(i);
    }
}

for (let i = 100; i <= 999; i++) {
    let str = '' + i;
    if (str[0]**3 + str[1] **3 + str[2] **3 === i) {
        console.log(i);
    }
}