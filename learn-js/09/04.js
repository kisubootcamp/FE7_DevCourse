// 프라이빗 패턴
function Counter(count = 0) {
    this.count = count;
    this.increment = function () {
        this.count++;
        return this.count;
    }
    this.decrement = function () {
        this.count--;
        return this.count;
    }
    this.getCount = function () {
        return this.count;
    }
}

const ct = new Counter(0);
ct.increment();
ct.decrement();
console.log(ct.getCount());

ct.count = 100;
console.log(ct.getCount);