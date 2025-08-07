// 피보나치 수열 계산
let n = 10; // 원하는 항의 수

// 피보나치 수열 로직
let cnt = 0;
let answer = [];
do {
	if (cnt === 0) answer.push(0);
	if (cnt === 1) answer.push(1);
	if (cnt > 1) answer.push(answer[cnt - 2] + answer[cnt - 1]);
	cnt++;
} while (cnt < n);
console.log(`피보나치 수열(${n}항):`, answer);
