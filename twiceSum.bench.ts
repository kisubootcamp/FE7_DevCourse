// import { bench } from "vitest";

// function twiceSum(arr: number[], target: number): number[][] {
//   const result: number[][] = [];

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === target) {
//         result.push([arr[i], arr[j]]);
//       }
//     }
//   }

//   return result;
// }

// // console.log(twiceSum([1, 2, 3, 4, 5], 5)); // [[1, 4], [2, 3]]
// // console.log(twiceSum([1, 2, 3, 4, 5], 9)); // [[4, 5]]
// // console.log(twiceSum([1, 2, 3, 4, 5], 6)); // [[1, 5], [2, 4]]

// // 테스트용 배열
// function generateArray(n: number): number[] {
//   return Array.from({ length: n }, (_, i) => i + 1);
// }

// const sizes = [1000, 5000, 100000] as const;
// for (const n of sizes) {
//   const arr = generateArray(n);
//   const target = Math.floor(n / 2);

//   bench(`O(n2) - n=${n}`, () => twiceSum(arr, target));
// }
