// Q1. 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
// 매개변수의 갯수 제한은 없습니다.
function sum(num1, num2) {
    return num1 + num2;
}

// Q2. 사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.  (매개변수 - 2개) (+, -, *, /)
// 구현 방법은 자율입니다.
function cal(num1, num2) {
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
}

// Q3. 짝수와 홀수 판별하기
//숫자를 매개변수로 받아서 짝수면 true, 홀수면 false를 반환하는 함수 isEven을 작성하세요.
//함수를 사용하여 7이 짝수인지 홀수인지 판별하고 결과를 출력하세요.
const isEven = (num) => num % 2 == 0 ? true : false;

console.log(isEven(7));

// Q4. 배열의 모든 요소 더하기
// 배열의 모든 요소의 합을 반환하는 함수를 작성하세요

function sumArray(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += num;
    }
    return sum;
}

console.log(sumArray([1, 2, 3])); // 6

// Q5. 배열의 최대값 찾기
// 배열에서 최대값을 찾는 함수를 작성하세요
function findMax(arr) {
    max = arr[0];
    for (item of arr) {
        if (item > max) {
            max = item;
        }
    }
    return max;
}
console.log(findMax([1, 5, 3, 9, 2])); // 9

// Q6. 문자열 반전
// 주어진 문자열을 반전시켜 반환하는 함수를 작성하세요

function reverseString(str) {
    let str2 = "";
    for (let i = str.length - 1; i >= 0; i--) {
        str2 += str[i];
    }
    return str2;
}

console.log(reverseString("hello")); // "olleh"

// Q7. 문자열에서 특정 문자 개수 세기
// 주어진 문자열에서 특정 문자의 개수를 세는 함수를 작성하세요

function countCharacter(str, ch) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch) {
            count++;
        }
    }
    return count;
}

console.log(countCharacter("banana", "a")); // 3

// Q8. 팩토리얼 계산하기
// - 양의 정수를 매개변수로 받아서 그 수의 팩토리얼을 반환하는 함수 `factorial`을 작성하세요.
// - 함수를 사용하여 5의 팩토리얼을 계산하고 결과를 출력하세요.
function factorial(n) {
    if (n == 0) return 1;
    if (n == 1) return 1;
    return n * factorial(n-1);
}

console.log(factorial(5));

// Q9. 삼각형 넓이 계산하기
//삼각형의 밑변과 높이를 매개변수로 받아서 넓이를 반환하는 함수 triangleArea를 작성하세요.
//함수를 사용하여 밑변이 10이고 높이가 5인 삼각형의 넓이를 계산하고 결과를 출력하세요.

function triangleArea(width, height) {
    return width * height / 2;
}
console.log(triangleArea(10, 5));