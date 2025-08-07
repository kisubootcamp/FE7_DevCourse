// break, continue

// while문 무한 루프
let i = 1;
/* while (i <= 9) {
  console.log(i);
  i++;
} */

// do ~ while
do {
  console.log(i++);
} while (i <= 9);

// for문 => 다중 반복문
for (let i = 1; i <= 9; i++) {
  console.log(i);
}

// 다중 for문 => 잘 사용x (시간 복잡도 기하급수적으로 증가하기 때문)
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}

// for..in
let arr = ["banana", "apple", "orange"];
let obj = { name: "철수", age: 20 };

for (let index in arr) {
  console.log(arr[index]);
}

for (let key in obj) {
  console.log(obj[key]);
}

// for..of => 배열 반복
for (let key of arr) {
  console.log(key);
}
