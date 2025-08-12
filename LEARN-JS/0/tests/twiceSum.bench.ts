import { bench } from 'vitest';

// 0(n2)
const twiceSum = (arr: number[], num: number) => {
  const total: [number, number][] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) total.push([arr[i], arr[j]]);
    }
  }
  console.log(total);
};
twiceSum([1, 2, 3, 4, 5], 5);
twiceSum([1, 2, 3, 4, 5], 9);
twiceSum([1, 2, 3, 4, 5], 6);

// 0(n)
const twiceSums = (numArr: number[], targer: number) => {
  const pairs: [number, number][] = [];
  const seen = new Set();

  for (const num of numArr) {
    const completed = targer - num;
    if (seen.has(completed)) {
      pairs.push([completed, num]);
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

  bench(`0(n2) - n=${n}`, () => {
    twiceSum(arr, target);
  });
  bench(`0(n) - n=${n}`, () => {
    twiceSums(arr, target);
  });
}
