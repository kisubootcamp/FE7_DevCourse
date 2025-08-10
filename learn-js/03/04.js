//for 문
/*
for (초기문; 조건문; 증감문){
    내용.
}
*/

for (let k = 1; k <= 9; k++) {
  console.log(i);
}

//다중 반복문
//복잡도가 올라가기 때문에 피해야 하는 안티 패턴
for (let i = 2; i <= 3; i++) {
  for (let j = 1; j <= 9; j++) {
    console.log(i + " x " + j + " = " + i * j);
  }
}

//for...in / for...of

let arr = ["banana", "apple", "orange"];
let obj = { name: "철수", age: 20 };

//in을 쓰지 않은 경우
for (let m = 0; m < arr.length; m++) {
  console.log(arr[m]);
}

//for...in
for (let index in arr) {
  console.log(arr[index]);
}

//주의: obj.key는 obj의 키 값이 아니라 'key'라는 속성의 값을 가져옴.
for (let key in obj) {
  console.log(obj[key]);
}

//배열을 반복한다고 가정한다면 for ~of가 좋다
//값을 바로 가져옴
//반복을 할 때마다 초기화되어 재할당이 일어나지 않으므로 const
for (const f of arr) {
  console.log(f);
}

//문자열 [] 선택
