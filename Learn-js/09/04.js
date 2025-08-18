// 프라이빗 패턴 => 외부에서 접근 불가
function Counter(num = 0) {
  let count = num; // 변수에 따로 저장하면 따로 수정 불가 (클로저 패턴) this.count = num (x)
  this.increment = function () {
    count++;
    return count;
  };
  this.decrement = function () {
    count--;
    return count;
  };
  this.getCount = function () {
    return count;
  };
}

const ct = new Counter(0);
ct.increment();
ct.increment();
console.log(ct.getCount());
