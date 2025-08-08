function bubbleSort(arr) {
  let newArr = [...arr];
  let temp = 0;

  for (let i = 0; i < newArr.length - 1; i++) {
    for (let j = 1; j < newArr.length; j++) {
      if (newArr[j] < newArr[j - 1]) {
        temp = newArr[j - 1];
        newArr[j - 1] = newArr[j];
        newArr[j] = temp;
      }
    }
  }

  return newArr;
}

console.log(bubbleSort([5, 3, 8, 1, 2])); // [1, 2, 3, 5, 8]
