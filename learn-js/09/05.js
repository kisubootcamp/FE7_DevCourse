// 프라이빗 패턴

function Counter(count = 0) {
  this.count = count;
  this.increment = function () {
    this.count++;
    return this.count;
  };
  this.decrement = function () {
    this.count--;
    return this.count;
  };
  this.getCount = function () {
    return this.count;
  };
}

const ct = new Counter(0);
ct.increment();
ct.increment();
console.log(ct.getCount()); // 2

ct.count = 100; // 외부에서 count 속성에 접근 가능 (프라이빗하지 않음)
console.log(ct.getCount()); // 100

// 프라이빗 속성을 만들기 위해 클로저를 사용
function PrivateCounter(num = 0) {
  let count = num;
  this.increment = function () {
    this.count++;
    return this.count;
  };
  this.decrement = function () {
    this.count--;
    return this.count;
  };
  this.getCount = function () {
    return this.count;
  };
}

const PrivateCt = new PrivateCounter(0);
PrivateCt.increment();
PrivateCt.increment();
console.log(PrivateCt.getCount()); //102

PrivateCt.PrivateCount = 100;
console.log(PrivateCt.getCount()); //102, private 해짐
