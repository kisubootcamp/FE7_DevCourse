import { bench } from "vitest";

// 0(n2)
function twiceSum(numArr: number[], target: number) {
	const result: [number, number][] = [];
	for (let i = 0; i < numArr.length; i++) {
		for (let j = i + 1; j < numArr.length; j++) {
			if (numArr[i] + numArr[j] === target) result.push([numArr[i], numArr[j]]);
		}
	}

	console.log(result);
}

//0(n)
function twiceSums(numArr: number[], target: number) {
	const pairs: [number, number][] = [];
	const seen = new Set(); // 아직 안배움

	for (const num of numArr) {
		const completed = target - num;
		if (seen.has(completed)) {
			pairs.push([completed, num]);
		}
		seen.add(num);
	}

	return pairs;
}

// 테스트용 배열
function generateArray(n: number): number[] {
	return Array.from({ length: n }, (_, i) => i + 1);
}

const sizes = [1000, 5000, 10000] as const;
for (const n of sizes) {
	const arr = generateArray(n);
	const target = Math.floor(n / 2);

	bench(`0(n2) - n = ${n}`, () => {
		twiceSum(arr, target);
	});
	bench(`0(n) - n = ${n}`, () => {
		twiceSums(arr, target);
	});
}
