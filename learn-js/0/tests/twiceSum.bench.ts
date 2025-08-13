import { bench } from "vitest";

// O(n2)
function twiceSum(numArr: number[], target: number) {
  const result: [number, number][] = [];
  // 모든 배열의 쌍을 확인
  for (let i = 0; i < numArr.length; i++) {
    for (let j = i + 1; j < numArr.length; j++) {
      if (numArr[i] + numArr[j] === target) result.push([numArr[i], numArr[j]]);
    }
  }
  return result;
}

// O(n)
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

  bench(`O(n2) - n=${n}`, () => {
    twiceSum(arr, target);
  });

  bench(`O(n) - n=${n}`, () => {
    twiceSums(arr, target);
  });
}
