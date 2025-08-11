import { bench } from "vitest";
//강사님 풀이
const twiceSum2 = (arr: number[], n: number) => {
  const result: [number, number][] = [];
  //모든 쌍의 배열 확인
  //왼쪽은 제외하고 오른쪽만 비교하도록 두번째 for문은 i+1(첫번째 for문 i 인덱스부터 오른쪽 값만 비교)
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === n) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  console.log(result);
};

//강사님 풀이 2 (시간 복잡도)
const twiceSum3 = (arr: number[], n: number) => {
  const result: [number, number][] = [];
  const seen = new Set(); //아직 안배움

  for (const num of arr) {
    const completed = n - num;
    if (seen.has(completed)) {
      result.push([completed, num]);
    }
    seen.add(num);
  }
  return result;
};

//테스트용
function generateArray(n: number): number[] {
  return Array.from({ length: n }, (_, i) => i + 1);
}

const sizes = [1000, 5000, 10000] as const;
for (const n of sizes) {
  const arr = generateArray(n);
  const target = Math.floor(n / 2);

  bench(`O(n2) - n ${n}`, () => {
    twiceSum2(arr, target);
  });

  bench(`O(n) - n ${n}`, () => {
    twiceSum3(arr, target);
  });
}
