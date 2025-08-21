// function removeDuplicateValues(obj) {
//   const count = {};
//   const result = {};
//   for (value in obj) {
//     if (count[obj[value]]) {
//       count[obj[value]]++;
//     } else {
//       count[obj[value]] = 1;
//     }
//   }

//   for (value in count) {
//     if (count[value] > 1) delete count[value];
//   }

//   Object.keys(count).forEach((key) => {
//     for (value in obj) {
//       if (key == obj[value]) result[value] = obj[value];
//     }
//   });

//   return result;
// }

// const obj = { a: 1, b: 2, c: 1, d: 3 };
// console.log(removeDuplicateValues(obj)); // { b: 2, d: 3 }

// const obj2 = { x: 5, y: 5, z: 10 };
// console.log(removeDuplicateValues(obj2)); // { z: 10 }

// const obj3 = { p: 1, q: 1, r: 1 };
// console.log(removeDuplicateValues(obj3)); // {}

// const obj4 = { m: 3, n: 4, o: 3 };
// console.log(removeDuplicateValues(obj4)); // { n: 4 }

// 2.
function deepEqual(obj1, obj2) {
  for (key in obj1) {
    if (!Object.hasOwn(obj2, key)) {
      return false;
    }
  }

  const valueArr = [];
  Object.values(obj1).forEach((value) => {
    valueArr.push(value);
  });

  console.log(valueArr);
}

console.log(deepEqual({ a: 1 }, { a: 1 })); // true
console.log(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })); // true
console.log(deepEqual({ a: { b: [1, 2] } }, { a: { b: [1, 2] } })); // true
console.log(deepEqual({ a: 1 }, { a: 2 })); // false
