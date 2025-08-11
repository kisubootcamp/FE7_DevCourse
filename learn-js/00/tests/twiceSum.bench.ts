import { bench } from "vitest";

// O(n^2)
const twiceSum = (array: number[], num: number) => {
  const result: [number, number][] = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === num) result.push([array[i], array[j]]);
    }
  }

  return result;
};

// O(n)
const twiceSums = (numArr: number[], target: number) => {
  const pairs: [number, number][] = [];
  const seen = new Set();

  for (const num of numArr) {
    const complated = target - num;
    if (seen.has(complated)) {
      pairs.push([complated, num]);
    }
    seen.add(num);
  }

  return pairs;
};

// 테스트용 배열
function generateArray(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i + 1);
}

const sizes = [1000, 5000, 10000] as const;
for (const n of sizes) {
  const arr = generateArray(n);
  const target = Math.floor(n / 2);

  bench(`O(n^2) - n = ${n}`, () => {
    twiceSum(arr, target);
  });

  bench(`O(n) - n = ${n}`, () => {
    twiceSums(arr, target);
  });
}

/*

중요한 건 hz 수치
초당 몇 번의 함수를 호출했는가의 지표
호출이 많으면 많을수록 성능이 좋은 것


*/
