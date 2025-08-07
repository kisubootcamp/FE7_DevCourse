// (4) for in / for of
// 배열, 객체를 반복할 때 사용

// (4-0) 배열은 for문 반복이 좀 쉬움 -> length 속성 덕분
const arr = ["banana", "apple", "orange"];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("===");

// (4-1-1) 배열의 for in
for (let index in arr) {
  //let index in ["banana", "apple", "orange"] 도 작동은 됨 (아래 줄 출력은 불가)
  console.log(arr[index]);
}

// (4-1-2) 객체의 for in
/*
const obj {

}*/

for (let key in obj) {
  console.log(obj[key]);
}
// []연산자 사용 :: 마침표 연산자 안 됨
// 왜? ::

// (4-2) 배열의 for of
// of 는 배열을 반복, 객체는 x
for (let index of arr) {
  // let 대신 const도 가능, 재할당 안 일어나서 더 올바름
  // 반복-초기화 와 재할당은 다름 / 반복될 때마다 삭제되고 재정의 됨
  console.log(arr[index]);
}

// 결론
// 배열 반복 = for of
// 객체 반복 = for in

// 반복 수행 방법은 무궁무진
