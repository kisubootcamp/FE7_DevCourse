function calculator(callback) {
  console.log(callback(10, 20));
  // TODO: callback을 10, 20으로 실행한 결과를 콘솔에 찍어라.
}
calculator((num1, num2) => num1 + num2); // 기대: 30
calculator((num1, num2) => num1 - num2); // 기대: -10

function stringProcessor(callback) {
  const text = "JavaScript";
  console.log(callback(text));
  // TODO: callback을 호출하고 결과를 콘솔에 찍어라.
}
stringProcessor((str) => str.toUpperCase());
stringProcessor((str) => str.length); // 10

function run(op) {
  console.log(op(5, 7));
}

function add(a, b) {
  return a + b;
}
run(add);
run(function (a, b) {
  return a + b;
});
run((a, b) => Math.max(a, b));
