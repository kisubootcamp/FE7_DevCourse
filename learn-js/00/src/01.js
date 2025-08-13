<<<<<<< HEAD
const MAX_LEVEL = 10;
MAX_LEVEL = 20;
=======
// 1.
function removeChar(str, charToRemove) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== charToRemove) {
      result += str[i];
    }
  }
  return result;
}
const remove = removeChar("hello world", "l");
console.log(remove);

// 2
function reverseArray(numArr) {
  const reversedNumArr = [];
  for (let i = numArr.length - 1; i >= 0; i--) {
    reversedNumArr.push(numArr[i]);
  }
  return reversedNumArr;
}
const reverseArrays = (numArr) => numArr.reverse();
const reversedNumArr = reverseArrays([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]
console.log(reversedNumArr);
>>>>>>> FE7_kisu
