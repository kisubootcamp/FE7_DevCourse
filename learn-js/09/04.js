// Private 패턴
function Counter(count = 0) {
  this.count = count;
  this.increment = function () {
    this.count++;
    console.log(`Count: ${this.count}`);
  };
  this.decrement = function () {
    this.count--;
    console.log(`Count: ${this.count}`);
  };
  this.getCount = function () {
    return this.count;
  };
}

const ct = new Counter(0);
ct.increment(); // Count: 1
ct.increment(); // Count: 2
console.log(ct.getCount()); // 2
