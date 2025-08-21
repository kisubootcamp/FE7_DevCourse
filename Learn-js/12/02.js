// 1. push()
// 2. pop()
// 3. shift()
// 4. unshift()
// 5. slice()
// 6. splice()
// 7. forEach()
// 8. map()
// 9. filter()
// 10. reduce()
// 11. find()
// 12. some()
// 13. every()
const numbers = [2, 4, 6];
const allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // true

// 14. includes()
const fruits = ["사과", "바나나", "오렌지"];
const hasApple = fruits.includes("사과");
console.log(hasApple); // true

// 15. join()
const fruits = ["사과", "바나나", "오렌지"];
const fruitString = fruits.join(", ");
console.log(fruitString); // '사과, 바나나, 오렌지'

// 16. reverse()
const numbers = [1, 2, 3, 4];
numbers.reverse();
console.log(numbers); // [4, 3, 2, 1]

// 17. sort()
// 18. flat()
const nestedArray = [1, [2, 3], [4, [5, 6]]];
const flatArray = nestedArray.flat(2);
console.log(flatArray); // [1, 2, 3, 4, 5, 6]

// 19. findIndex()
const numbers = [10, 20, 30, 40];
const index = numbers.findIndex((num) => num > 25);
console.log(index); // 2

// 20. indexOf()
const fruits = ["사과", "바나나", "오렌지"];
const index = fruits.indexOf("바나나");
console.log(index); // 1

// 21. lastIndexOf()
const numbers = [2, 5, 9, 2];
const lastIndex = numbers.lastIndexOf(2);
console.log(lastIndex); // 3

// 22. fill()
const arr = new Array(5).fill(0);
console.log(arr); // [0, 0, 0, 0, 0]

// 23. copyWithin()
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3); // 인덱스 3부터 시작하여 인덱스 0으로 복사
console.log(arr); // [4, 5, 3, 4, 5]
