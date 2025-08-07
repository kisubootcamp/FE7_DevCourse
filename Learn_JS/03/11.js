// 연습문제
// Q1. 
// //[연습문제 - 1부터 9까지 출력하기]

for(let i = 1; i <= 0; i++){
    console.log(i);
}

// Q2.
// //[연습문제 - 1부터 9까지의 합 출력하기]

let sum = 0;
for(let i = 1; i <= 9; i++){
    sum += i;
}
console.log(sum);

// Q3.
// //[연습문제 - 1부터 100까지 짝수만 출력하기]

for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}

// Q4.
// /*
// [연습문제 - 음수 걸러내기]

// 배열에 음수값이 섞여있습니다. 
// 음수는 제외하고 양수들만 골라내어 합을 구하세요.

// */

let numArr = [10, -10, 20, -30, 40];

// //Let`s Do it!
let sum2 = 0;
for(const num of numArr){
    if(num > 0){
        sum2 += num;
    }
}
console.log(sum2);

// Q5.
// /*
// [연습문제 - 홀짝 구분하기]

// 0부터 15까지 출력하면서 각각의 수가 짝수인지 홀수인지
// 구분하여 출력하도록 코드를 작성해주세요.

// 출력 예시 ) 
// 0 짝수 
// 1 홀수
// 2 짝수
// 3 홀수
// 4 짝수
// ... 중략 .. 
// 15 홀수
// */

for(let i = 1; i <= 15; i++){
    console.log(i % 2 === 0 ? i + " 짝수" : i + " 홀수");
}

// Q6. 
// // 주어진 숫자 배열의 최댓값 찾기 
const numArr2 = [7, 2, 9, 4, 5];
let maxNum = 0;
for(const num of numArr2){
    if(num > maxNum){
        maxNum = num;
    }
}
console.log(maxNum);

// Q7.
// // 짝수 인덱스의 요소만 새로운 배열 담기
// // 배열의 .push() 메서드를 사용하세요.
const arr = ['a', 'b', 'c', 'd', 'e'];
const newArr = [];
for(let i = 0; i < arr.length; i++){
    if(i % 2 === 0){
        newArr.push(arr[i]);
    }
}
console.log(newArr);


// Q8.
// // 구구단 3단 출력하기
for(let i = 1; i <= 9; i++){
    console.log(`3 x ${i} = ${3 * i}`);
}