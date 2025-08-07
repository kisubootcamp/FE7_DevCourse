// 특정 숫자까지의 곱 계산

let n = 5; // 예시 숫자

// 팩토리얼 로직
let factorial = 1;
let cnt = 0;
do {
	cnt++;
	factorial *= cnt;
} while (cnt < n);

console.log(`${n}의 팩토리얼:`, factorial); // 출력 120
