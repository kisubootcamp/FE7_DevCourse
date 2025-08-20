const person = {
  name: 'kim',
};

// value -> 속성에 저장할 값
// writable -> false로 지정 시, 수정 불가능
// enumerable -> false로 지정 시, 열거 가능 속성에 안보임.
// configurable -> false로 지정 시, 속성의 삭제 불가
Object.defineProperty(person, 'age', {
  value: 20,
  enumerable: true,
  writable: true,
  configurable: false,
});
person.age = 50;
delete person.age;

console.log(person);
console.log(person.age);

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
