import { bench } from "vitest";

function twiceSum(arr: number[], num: number) {
  let doubleArr: [number, number][] = [];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        doubleArr.push([arr[i], arr[j]]);
      }
    }
  }
  return console.log(doubleArr);
}

function twiceSums(numArr: number[], target: number) {
  const paris: [number, number][] = [];
  const seen = new Set(); //Set은 중복되는 정수를 제외하는 것

  for (const num of numArr) {
    const completed = target - num;
    if (seen.has(completed)) {
      paris.push([completed, num]);
    }
    seen.add(num);
  }
  return paris;
}

function generateArray(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i + 1);
}

//테스트용 배열
const sizes = [1000, 5000, 10000] as const;
for (const n of sizes) {
  const arr = generateArray(n);
  const target = Math.floor(n / 2);

  bench(`O(n2) - n=${n}`, () => {
    twiceSum(arr, target);
  });

  bench(`O(n2) - n=${n}`, () => {
    twiceSums(arr, target);
  });
}
