// 2
function calculator(callback) {
  return () => callback(10, 20);
}
const cb = calculator((num1, num2) => num1 + num2);

// setTimeout
setTimeout(() => {}, 1000);
