//메모이제이션 memoization
//계산결과를 캐시에 저장해 두었다가, 동일 입력시 다시 계산하지 않고 꺼내서 쓰는 기법
function memoization(cb) {
  const cache = {};
  return function (...args) {
    // 함수 호출 시 전달된 모든 인자를 배열 형태로 받고...(...args)
    // 이를 JSON 문자열로 변환해서 캐시 key로 사용
    const key = JSON.stringify(args);

    // 이미 해당 key로 계산한 결과가 있다면 즉시 반환(재계산 불필요)
    if (cache[key]) return cache[key];
    // 캐시에 없다면, 원래 함수(fn)을 실행하여 결과를 얻음
    const result = cb(...args);
    // 결과를 캐시에 저장함
    cache[key] = result;
    // 결과를 반환함
    return result;
  };
}

function slowFunction(num) {
  for (let i = 0; i < 9999999999; i++);
  return num * 2;
}

const memoizedFn = memoization(slowFunction);
console.log(memoizedFn(5)); // 8
console.log(memoizedFn(5)); //
console.log(memoizedFn(5));
console.log(memoizedFn(5));
memoizedFn = null;
