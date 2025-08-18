// 프라이빗 패턴
// ct.count = 100 와 같이 직접적으로 접근이 불가능하게 함(this를 빼고 let으로 선언하면서)
// prototype에 있는 함수에서 객체에 있는 변수를 this로 참조할 때 프라이빗은 this로 참조를 못해서 함수객체에 그냥 메서드까지 다 참조 시켜야 함
function Counter(num = 0) {
  let count = num;
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
