// 함수를 매개변수로 받아서 사용하는 함수
// -> 콜백함수(callback)
// 함수의 배개변수에 함수가 전달될 때에는 관례적으로 callback 또는 cb라고 글로벌하게 씀
function greet(fn) {
  console.log(fn("kisu"));
}

greet(function (name) {
  return `Hello, ${name}`;
});

// 화살표 함수
greet((name) => `Hello, ${name}`);
