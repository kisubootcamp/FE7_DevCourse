function sum(num1, num2) {
  console.log(num1 + num2);
}
sum(10, 20);

function sum(...numbers){
    let result= 0;
 for(const sum of numbers){
    result += num;
 } return result; 
}
const result = sum(10,20,30);

//2
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  if (b === 0) return a / b;
}

//3

function isEven(number) {
  return number % 2 === 0; 
}

console.log(isEven(7));

//4 



function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {  
    sum += arr[i];
  }
  return sum;
}

function findmax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findmax([1, 5, 3, 9, 2]));  

//6 
console.log(reverseString("hello")); // "olleh"


function reverseString(str) {
  let rever = "";

  for (let i = str.length - 1; i >= 0; i--) {
    rever += str[i];
  }

  return rever;
}

console.log(reverseString("hello")); 

//7 

console.log(countCharacter("banana", "a")); // 3

function countCharacter(str, targetChar) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === targetChar) {
      count++;
    }
  }

  return count;
}

console.log(countCharacter("Banana", "a")); 

//8 
// - 양의 정수를 매개변수로 받아서 그 수의 팩토리얼을 반환하는 함수 `factorial`을 작성하세요.
// - 함수를 사용하여 5의 팩토리얼을 계산하고 결과를 출력하세요.
//팩토리얼은 
function fac(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}
console.log(fac(5));

//1+

removeChar("hello world", "o"); // "hell wrld"

function removeChar(str, targetChar) {
  let result = ""; 

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== targetChar) {
      result += str[i];  
    }
  }

  return result;
}

console.log(removeChar("hello world", "o"));

//2+ 
//주어진 배열 요소를 반전시키는 함수를 작성
reverseArray([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]

function reverseArray(array){
  let reversed = [];
  for(let i= 0; i < arr.length, i++);{

  }
}

//3. 특정 숫자 찾기 

//주어진 배열에서 특정 숫자가 있는지 확인하는 함수를 작성하시오.
입력/출력
containsNumber([1, 2, 3, 4, 5], 5); // true
containsNumber([1, 2, 3, 4, 5], 7); // false

function containsNumber(array, B){
for(let v =0; let v <array.length; v++;){
 if(array[v] === B){ 
  return = true;}
else {return = false}; }
}

console.log(containsNumber([1, 2, 3, 4, 5], 5));

// 4. 애너그램인지 확인
// 문제
// 두 문자열이 애너그램(서로 다른 순서로 같은 문자를 가지는 경우)인지 확인하는 함수를 작성하시오. (알파뱃 소문자만 온다고 가정)
// 입력/출력 
// isAnagrams("listen", "silent"); // true
// isAnagrams("fluster", "restful"); // true
// isAnagrams("rat", "car"); // false
// isAnagrams("aaa", "aaaa"); // false

// 애너그램 --> car rac   abc bca            문자만 같으면 됨 3

function isAnagrams(cc, dd){

}

// ## 5. 배열에서 두 수의 합

// ### 문제

// 주어진 배열에서 두 수의 합이 특정 목표값이 되는 쌍을 찾아 반환하는 함수를 작성하시오.

// **입력/출력**

// ```jsx
// twiceSum([1, 2, 3, 4, 5], 5); // [[1, 4], [2,3]]
// twiceSum([1, 2, 3, 4, 5], 9); // [[4, 5]]
// twiceSum([1, 2, 3, 4, 5], 6); // [[1, 5], [2,4]]
// ```

function twiceSum(arrayA, C){
  for (let a = 0;  a < arrayA.length ; a++ ){
    for (let b = a + 1; b < arrayA.length; b++)
    if (arrayA[a] + arrayA[b] === C){
      return [a,b]  ;}
  }
 return null; 
}

console.log twiceSum([1, 2, 3, 4, 5], 5); 