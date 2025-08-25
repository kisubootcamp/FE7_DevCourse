// Math 객체

// random 써보기(0이상 1미만)
// 0 ~ 9
console.log(Math.floor(Math.random() * 10));

const numArr = [1, 2, 3, 4];
console.log(numArr[Math.floor(Math.random() * numArr.length)]); // 이런 식으로 배열 크기를 곱하면 그 숫자 미만으로 무조건 나온다
// 0~3 구하고 싶으면 4를 곱하면 됨

// 밑에 크기는 A이상 B이하를 구하는 공식
Math.floor(Math.random() * (B - A + 1)) + A;

//  밑에 공식은 15이상 25미만(이하에서 +1만 뺀 것)
Math.floor(Math.random() * (25 - 15)) + 15;
