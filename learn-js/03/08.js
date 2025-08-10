// 연습문제 - 쉬움
/// 풀이

/*
// 1.
let i = 1;
// const 불가
while (i <= 9) {
  console.log(i++);
  //i++;
}
*/
/*
// 다른 방법
for (let i = 1; i <= 9; i++) {
  console.log(i);
}
*/

/*
// 2. *
let num = 0;
for (let i=1; i<=9; i++){
    num += i;
    //나온 i값들이 누적되어 더해져야 됨
}
console.log(`1부터 9까지 합 :$(num)`);
*/

/*
// 3.
for (let j = 1; j <= 100; j++) {
  if (j % 2 === 0) {
    console.log(j);
  }
}
// while문도 해보기
*/

/*
// 4. *
let numArr = [10, -10, 20, -30, 40];
let num = 0;

for (let i=0; i<numArr.length;i++){
    if (numArr[i]>=0) {
        num += numArr[i];
    }
}
console.log(num);

//for of 사용
*/

/*
// 5.
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i, "짝수");
  } else {
    console.log(i, "홀수");
  }
}
*/

/*
// 6. *
const numArr = [7, 2, 9, 4, 5];
// 앞에꺼랑 비교해서 계속 i++하면서 젤 크면 멈춤?

let max = numArr[0];
for (let i=0; i<numArr.length; i++){
    if (numArr[i]>max) {
        max = numArr[i];
    }
}
console.log(max);

//for of 로 시도해보기
*/

// 7. *
const arr = ["a", "b", "c", "d", "e"];
for (let index in arr) {
  if (index % 2 === 0) {
    arr.push("z");
  }
}
console.log(arr);
// 이렇게는 배열 전체의 맨 뒤에 추가 됨, 그 자리에 넣어야 하는데

///
const newArr = [];
for (const index in arr) {
  if (index % 2 === 0) {
    newArr.push(arr[index]);
  }
}
console.log(newArr);
//for in -> index배열 이용 위함

/*
// 8. done.
for (let i = 1; i <= 9; i++) {
  let a = i * 3;
  console.log("3 * ", i, "=", a);  
}
*/
