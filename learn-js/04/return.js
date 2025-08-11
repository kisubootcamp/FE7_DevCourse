// 화살표 함수는 함수의 내용이 return밖에 없다면 축약해서 표현할 수 있음

// 두 함수는 동일
const sum = (a, b) => a + b;

const sum2 = (a, b) => {
  return a + b;
};

// 객체를 return 할 땐 () 써주기
const value = () => ({ a: "b" });
