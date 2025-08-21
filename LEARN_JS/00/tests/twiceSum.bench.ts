// tests/twiceSum.bench.ts
import { bench } from "vitest";

// O(n^2): 이중 루프
function twiceSum(nArr: number[], target: number) {
  const result: [number, number][] = [];
  for (let i = 0; i < nArr.length; i++) {
    for (let j = i + 1; j < nArr.length; j++) {
      if (nArr[i] + nArr[j] === target) result.push([nArr[i], nArr[j]]);
    }
  }
  return result;
}

// O(n): 해시셋(보조 공간)
function twiceSumLinear(nArr: number[], target: number) {
  const pairs: [number, number][] = [];
  const seen = new Set<number>();

  for (const num of nArr) {
    const complement = target - num;
    if (seen.has(complement)) pairs.push([complement, num]);
    seen.add(num);
  }
  return pairs;
}

function generateArray(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i + 1);
}

const sizes = [1_000, 5_000, 10_000] as const;

for (const n of sizes) {
  const arr = generateArray(n);
  const target = n + 1; // 1..n에서 합이 많이 나오도록(1+n, 2+(n-1), ...)

  bench(`O(n^2) - n=${n}`, () => {
    twiceSum(arr, target);
  });

  bench(`O(n)   - n=${n}`, () => {
    twiceSumLinear(arr, target);
  });
}
