// ### 연습문제

// Q1

// ```jsx
// // 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
// // 매개변수의 갯수 제한은 없습니다.
// ```

function sum(...numbers){
    let result = 0;
    for(const number of numbers){
        result += number;
    }
    return result;
}
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Q2. 

// ```jsx
// //사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.  (매개변수 - 2개) (+, -, *, /)
// //구현 방법은 자율입니다.
// ```

function calc(a, b){
    console.log(`${a} + ${b} = ${a + b}`);
    console.log(`${a} - ${b} = ${a - b}`);
    console.log(`${a} * ${b} = ${a * b}`);
    console.log(`${a} / ${b} = ${a / b}`);
}
calc(6, 3);

// Q3. 

// 짝수와 홀수 판별하기

// ```jsx
// //숫자를 매개변수로 받아서 짝수면 true, 홀수면 false를 반환하는 함수 isEven을 작성하세요.
// //함수를 사용하여 7이 짝수인지 홀수인지 판별하고 결과를 출력하세요.
// ```

function isEven(num){
    return num % 2 === 0 ? true : false;
}
console.log(isEven(7));

// Q4. 배열의 모든 요소 더하기

// 배열의 모든 요소의 합을 반환하는 함수를 작성하세요

// ```jsx
// console.log(sumArray([1, 2, 3])); // 6
// ```

function sumArray(arr){
    let sum = 0;
    for(const a of arr){
        sum += a;
    }
    return sum;
}
console.log(sumArray([1, 2, 3]));

// Q5. 배열의 최대값 찾기

// 배열에서 최대값을 찾는 함수를 작성하세요

// ```jsx
// console.log(findMax([1, 5, 3, 9, 2])); // 9
// ```

function findMax(arr){
    let maxVal = 0;
    for(const a of arr){
        maxVal = a > maxVal ? a : maxVal;
    }
    return maxVal;
}
console.log(findMax([1, 5, 3, 9, 2]));

// Q6. 문자열 반전

// 주어진 문자열을 반전시켜 반환하는 함수를 작성하세요

// ```jsx
// console.log(reverseString("hello")); // "olleh"
// ```

function reverseString(str){
    let result = "";
    for(let i = str.length - 1; i >= 0; i--){
        result += str[i];
    }
    return result;
}
console.log(reverseString("hello"));

// Q7. 문자열에서 특정 문자 개수 세기

// 주어진 문자열에서 특정 문자의 개수를 세는 함수를 작성하세요

// ```jsx

// console.log(countCharacter("banana", "a")); // 3
// ```

function countCharacter(str, target){
    let count = 0;
    for(const ch of str){
        if(ch === target) count++;
    }
    return count;
}
console.log(countCharacter("banana", "a"));

// Q8. 팩토리얼 계산하기

// - 양의 정수를 매개변수로 받아서 그 수의 팩토리얼을 반환하는 함수 `factorial`을 작성하세요.
// - 함수를 사용하여 5의 팩토리얼을 계산하고 결과를 출력하세요.

function factorial(n){
    let result = 1;
    while(n > 0){
        result *= n--;
    }
    return result;
}
console.log(factorial(5));

// Q9. 삼각형 넓이 계산하기

// ```jsx
// //삼각형의 밑변과 높이를 매개변수로 받아서 넓이를 반환하는 함수 triangleArea를 작성하세요.
// //함수를 사용하여 밑변이 10이고 높이가 5인 삼각형의 넓이를 계산하고 결과를 출력하세요.
// ```

function triangleArea(w, h){
    return w * h / 2;
}
console.log(triangleArea(10, 5));