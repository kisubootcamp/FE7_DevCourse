// 프라이빗 패턴
function Counter(num = 0) {
	// count = num;
	let count = num; // 클로저 문법처럼 이렇게 막아버리고
	this.increment = function () {
		// this.count++;
		// return this.count;
		count++;
		return count; // this.를 삭제하기
	};
	this.decrement = function () {
		count--;
		return count;
	};
	this.getCount = function () {
		return count;
	};
}

const cnt = new Counter();
cnt.increment();
cnt.increment();
cnt.increment();
console.log(cnt.getCount());

cnt.count = 100;
console.log(cnt.getCount());
// 이렇게 하면 3, 100이 나옴. 원치않게 값이 변경되는 불상사가 생기게 됨
// 막는 방법? 클로저 활용

/* 예전 bankAccount 개선하기 */
function BankAccount(initialBalance) {
	let balance = initialBalance;
	this.deposit = function (amount) {
		balance += amount;
	};
	this.withdraw = function (amount) {
		balance -= amount;
	};
	this.getBalance = function () {
		return balance;
	};
}
const myBank = new BankAccount(0);
myBank.deposit(1000);
console.log(myBank.getBalance());
myBank.withdraw(500);
console.log(myBank.getBalance());
myBank.balance = 40000; // 이렇게 도중에 값 집어넣어도 멀쩡쓰
console.log(myBank.getBalance());
