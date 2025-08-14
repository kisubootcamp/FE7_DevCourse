// 연습문제
// 복습 완료 :: 4, 5번만 다시 해보기

// 1.
// 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
// 매개변수의 갯수 제한은 없습니다.

// function sum(num1, num2) {
//   let result = num1 + num2;
//   return result;
// }
const sum = (num1, num2) => {
  let result = num1 + num2;
  return result;
};

//let resultA = sum(10, 20);
console.log(sum(10, 20));

/// 다시 **
// -> 가변 함수를 만드는 문제였음
function sumNew(...nums) {
  let resultNew = 0;
  for (const value of nums) {
    resultNew += value;
  }
  return resultNew;
}
console.log(sumNew(10, 20, 30, 40));

// 2.
//사칙연산을 수행하는 로직을 담은 함수를 구현해주세요. (매개변수 - 2개) (+, -, *, /)
//구현 방법은 자율입니다.
function cal(num1, num2) {
  let plus = num1 + num2;
  let minus = num1 - num2;
  let multiply = num1 * num2;
  let divid = num1 / num2;
  console.log(plus);
  console.log(minus);
  console.log(multiply);
  console.log(divid);
}
cal(4, 2);

// 재풀이 :: 사칙연산 선택 가능하게
function calNew(num1, num2, spring) {
  let calTwo;
  {
    if (spring === "+") calTwo = num1 + num2;
    else if (spring === "-") calTwo = num1 - num2;
    else if (spring === "/") calTwo = num1 / num2;
    else if (spring === "*") calTwo = num1 * num2;
  }
  return calTwo;
}

console.log(calNew(5, 2, "-"));
console.log(calNew(5, 2, "+"));

// 3.
//숫자를 매개변수로 받아서 짝수면 true, 홀수면 false를 반환하는 함수 isEven을 작성하세요.
//함수를 사용하여 7이 짝수인지 홀수인지 판별하고 결과를 출력하세요.

// function isEven(num) {
//   let result;

//   if (num % 2 === 0) result = "true";
//   else result = "false";

// return result;
// }

// console.log(isEven(7));

// hint : if조건문은 T/F의 결과를 내려고 함 (최대한 짧은 답 내보기)
// 화살표 함수 축약 :: const arrFunc_1 = (num1, num2) => num1 + num2; :: {} 가 없어지며 return 없어도 됨

const isEven = (num) => (num % 2 === 0 ? true : false);
// 축약형에서는 ({}없어서) if문을 쓸 수 없다
console.log(isEven(6));

/// best
const isNums = (num) => num % 2 === 0;
console.log(isNums(7));

// 4. *
//배열의 모든 요소의 합을 반환하는 함수
// hint : nums를 이용해보기
function sumArray([...nums]) {
  let sumArrayA = 0;
  for (const content of nums) {
    sumArrayA += content;
  }
  return sumArrayA;
}

console.log(sumArray([1, 2, 3, 5]));
// numbers 이용한 방법?

//////////////////////////////////
// 5. **
//배열에서 최대값을 찾는 함수

//////// 다시 ///////
const findMax = (...nums) => {
  let Max = nums[0]; //첫번째 값에 접근해야 함
  for (const valueFind of nums) {
    if (Max < valueFind) Max = valueFind;
  }
  return Max;
};

// console.log(findMax([1, 5, 3, 9, 2]));
// nums 안에 [[1, 5, 3, 9, 2]] 이렇게 들어감 :: 즉,nums[0] = [1, 5, 3, 9, 2] 됨
console.log(findMax[(1, 5, 3, 9, 2)]); //undefined

// 6. ***
function reverseString(string) {
  // 낱개로 쪼개서 반대로 대입..?
  // 낱개로 쪼램 -> for of :: no
  // 반대로 대임 -> for문을 거꾸로  i--한다?
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

console.log(reverseString("hello"));

// 7. ***
function countCharacter(spring1, spring2) {
  // 특정 문자 -> 반복문, continue ? :: no
  // 글자 쪼개기 for of ? :: yes
  let count = 0;
  for (const valueCount of spring1) {
    if (valueCount === spring2) count += 1;
  }
  return count;
}

console.log(countCharacter("banana", "a")); // 3

// 8.
function factorial(num) {
  let cal = 1;
  for (let i = 1; i <= num; i++) {
    cal *= i;
  }
  return cal;
}

console.log(factorial(5));
// 재귀함수로 풀 수 있음 ==> 06.js 참고

// 9.
function triangleArea(a, b) {
  return 0.5 * a * b;
}
console.log(triangleArea(10, 5));

/*
// 5
function findMax(numbers) {
  let max = numbers[0];
  for (const num of numbers) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(findMax([1, 5, 3, 9, 2])); // 9

// 6
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(reverseString("hello")); // "olleh"

// 7.
function countCharacter(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) count++;
  }
  return count;
}
const countCharac = (str, char) => str.split(char).length - 1;
console.log(countCharac("banana", "a")); // 3
*/
