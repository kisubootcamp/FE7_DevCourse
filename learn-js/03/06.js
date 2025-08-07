const arr = ["banana", "apple", "orange"];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

const obj = { name: "철수", age: 20 };
// console.log(obj.name);
// console.log(obj.age);

console.log("===");
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

console.log("===");
// for (let index in arr) console.log(index); // 이렇게 하면 인덱스가 출력이 됨
for (let index in arr) console.log(arr[index]); // 이렇게 해도 위에랑 똑같이 나옴
for (let key in obj) console.log(obj[key]); // 객체는 이렇게 대괄호로 감싸서 해야함. 마침표 연산자는 안됨

console.log("===");
// for ( of )    -> 배열 반복할 땐 이게 제일 이상적인 방법임
for (const value of arr) {
  console.log(value);
}

// 나의 질문!! 강사님은 let으로 사용ㅇ하셨는데 vscode가 const로 작성해버림. 이래도 되는지?
// for in, for of는 반복문을 시행하며 새로이 할당되는거라 오히려 const가 제일 좋음! 반복문 안에 선언이 들어있는것
