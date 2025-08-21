function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counterA = makeCounter();
console.log(counterA());
console.log(counterA());

const counterB = makeCounter();
console.log(counterB());
