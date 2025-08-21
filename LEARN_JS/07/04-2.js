// 메모이제이션
function memoization(cb) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) return cache[key];
    const result = cb(...args);
    cache[key] = result;
    return result;
  };
}
function slowFuncion(num) {
  for (let i = 0; i < 9999999; i++);
  return num * 2;
}
const memoizedFn = memoization(slowFuncion);
console.log(memoizedFn(10));
console.log(memoizedFn(10));
console.log(memoizedFn(10));
