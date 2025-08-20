const person = {
  name: 'jun',
};

// value
// writable -> false 수정 불가능 true 가능
// enumerable -> false 열거 가능 속성에 안보임, true 보임
// connfigurable -> 속성의 삭제 불가
Object.defineProperty(person, 'age', {
  value: 20,
  enumerable: true,
  writable: true,
  configurable: false,
});

Object.defineProperties(person, {
  job: {
    value: 'developer',
    enumerable: true,
  },
  salary: {
    value: 5000,
    enumerable: true,
  },
});

console.log(person);
