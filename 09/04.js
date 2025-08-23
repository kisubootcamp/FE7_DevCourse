// 프라이빗 패턴

function Counter(num = 0) {
  let count = num;
  this.increment = function () {
    count++;
    return this.count;
  };
  this.decrement = function () {
    count--;
    return this.count;
  };
  this.getCount = function () {
    return count;
  };
}

const ct = new Counter(0);
ct.increment();
ct.increment();
console.log(ct.getCount());

ct.count = 100;
console.log(ct.getCount());
