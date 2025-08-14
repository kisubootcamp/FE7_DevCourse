function outer() {
  let count = 0;
  function counter() {
    return ++count;
  }
  return counter;
}

const counter1 = outer();
console.log(counter1());
console.log(counter1());
counter1 = null; //이렇게 할당하면 가비지 컬렉터를 실행시킴

const counter2 = outer();
console.log(counter2());
console.log(counter2());
console.log(counter2());
counter2 = null;
