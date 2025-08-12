import { expect, test } from "vitest";

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function sortTest(arr, sortArr) {
  if (arr.length !== sortArr.length) return false;

  const newSort = bubbleSort(arr);

  for (let i = 0; i < sortArr.length; i++) {
    if (newSort[i] !== sortArr[i]) return false;
  }

  return true;
}

test("bubble sort", () => {
  expect(bubbleSort([67, 2, 13, 4])).toStrictEqual([2, 4, 13, 67]);
});

console.log("sortTest", sortTest([67, 2, 13, 4], [2, 4, 13, 67]));
