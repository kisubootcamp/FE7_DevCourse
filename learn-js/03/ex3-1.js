// 피보나치 수열 계산
const n = 10; // 원하는 항의 수

// 피보나치 수열 로직
let cnt = 0;
let answer = [];

// do~while
/* do {
	if (cnt === 0) answer.push(0);
	if (cnt === 1) answer.push(1);
	if (cnt > 1) answer.push(answer[cnt - 2] + answer[cnt - 1]);
	cnt++;
} while (cnt < n); */

// while
/* while(cnt < n) {
	if (cnt === 0) answer.push(0);
	if (cnt === 1) answer.push(1);
	if (cnt > 1) answer.push(answer[cnt - 2] + answer[cnt - 1]);
	cnt++;
} */

// for(강사님 풀이)
let a = 0;
let b = 1;
let tmp;

for (let count = 0; count < n; count++) {
	answer.push(a);
	tmp = a;
	a = b;
	b = tmp + b;
}

console.log(`피보나치 수열(${n}항):`, answer);
