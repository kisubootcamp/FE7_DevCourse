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
