### 연습문제

Q1.

```jsx
//[연습문제 - 1부터 9까지 출력하기]
```

답:

```jsx
for (let i = 1; i <= 9; i++) {
  console.log(i);
}
```

Q2.

```jsx
//[연습문제 - 1부터 9까지의 합 출력하기]
```

답:

```jsx
let sum = 0;

for (let i = 1; i <= 9; i++) {
  sum += i;
}

console.log(sum);
```

Q3.

```jsx
//[연습문제 - 1부터 100까지 짝수만 출력하기]
```

답:

```jsx
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}
```

Q4.

```jsx
/*
[연습문제 - 음수 걸러내기]

배열에 음수값이 섞여있습니다. 
음수는 제외하고 양수들만 골라내어 합을 구하세요.

*/

let numArr = [10, -10, 20, -30, 40];

//Let`s Do it!
```

답:

```jsx
let numArr = [10, -10, 20, -30, 40];

const sum = numArr.reduce((acc, cur) => {
  if (cur > 0) return acc + cur;
  return acc;
}, 0);

console.log(sum);
```

Q5.

```jsx
/*
[연습문제 - 홀짝 구분하기]

0부터 15까지 출력하면서 각각의 수가 짝수인지 홀수인지
구분하여 출력하도록 코드를 작성해주세요.

출력 예시 ) 
0 짝수 
1 홀수
2 짝수
3 홀수
4 짝수
... 중략 .. 
15 홀수
*/
```

답:

```jsx
for (let i = 0; i < 16; i++) {
  if (i % 2 === 0) {
    console.log(`${i} 짝수`);
  } else console.log(`${i} 홀수`);
}
```

Q6.

```jsx
// 주어진 숫자 배열의 최댓값 찾기
const numArr = [7, 2, 9, 4, 5];
```

답:

```jsx
const numArr = [7, 2, 9, 4, 5];
let max = 0;

for (let i = 0; i < numArr.length; i++) {
  if (max < numArr[i]) max = numArr[i];
}

console.log(max);
```

Q7.

```jsx
// 짝수 인덱스의 요소만 새로운 배열 담기
// 배열의 .push() 메서드를 사용하세요.
const arr = ["a", "b", "c", "d", "e"];
```

답:

```jsx
const arr = ["a", "b", "c", "d", "e"];
let evenArr = [];

for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) evenArr.push(arr[i]);
}

console.log(evenArr);
```

Q8.

```jsx
// 구구단 3단 출력하기
```

답:

```jsx
for (let i = 1; i <= 9; i++) {
  console.log(`3 × ${i} = ${3 * i}`);
}
```
