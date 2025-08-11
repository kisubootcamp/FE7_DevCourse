// 못풀엇다네요

// 소수찾기
let start = 1,
	end = 100; // 범위

let results = [];
while (start <= end) {
	if (start < 2) {
		start++;
		continue;
	}

	let i;
	for (i = 2; i < start; i++) {
		if (start % i === 0) break; // 안 나눠떨어지면 아웃
	}

	if (i === start) results.push(start);
	start++;
}
console.log(results);

// 강사님 풀이
for (let number = start; number <= end; number++) {
	let isPrime = true;
	// 2부터 자기 자신의 숫자까지 나누기.
	// 하나라도 나눠지면 소수가 아님.
	// 나머지가 0이면 나누어졌다는 것
	for (let divisor = 2; divisor < number; divisor++) {
		if (number % divisor === 0) {
			isPrime = false;
			break;
		}
	}

	if (isPrime) isPrime.push(number);
}
