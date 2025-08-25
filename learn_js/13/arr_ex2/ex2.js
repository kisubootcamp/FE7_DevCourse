// 2. 배열 내 객체 그룹화 : 객체 배열이 주어졌을 때, 특정 속성을 기준으로 객체들을 그룹화하는 함수를 작성하세요.
function groupBy(arr, key) {
  // return arr.reduce((acc, obj) => {
  //   const groupKey = obj[key];
  //   if (!acc[groupKey]) {
  //     acc[groupKey] = [];
  //   }
  //   acc[groupKey].push(obj);
  //   return acc;
  // }, {});
  return arr.reduce((r, v) => {
    const groupKey = v[key];
    if (!r[groupKey]) {
      r[groupKey] = [];
    }
    r[groupKey].push(v);
    return r;
  }, {});
}

const people = [
  { name: 'John', age: 20, city: 'New York' },
  { name: 'Jane', age: 20, city: 'Boston' },
  { name: 'Mark', age: 25, city: 'New York' },
  { name: 'Mary', age: 25, city: 'Boston' },
  { name: 'James', age: 30, city: 'New York' },
];

console.log(groupBy(people, 'age'));
// 출력: {
//   '20': [
//     { name: 'John', age: 20, city: 'New York' },
//     { name: 'Jane', age: 20, city: 'Boston' }
//   ],
//   '25': [
//     { name: 'Mark', age: 25, city: 'New York' },
//     { name: 'Mary', age: 25, city: 'Boston' }
//   ],
//   '30': [
//     { name: 'James', age: 30, city: 'New York' }
//   ]
// }

console.log(groupBy(people, 'city'));
// 출력: {
//   'New York': [
//     { name: 'John', age: 20, city: 'New York' },
//     { name: 'Mark', age: 25, city: 'New York' },
//     { name: 'James', age: 30, city: 'New York' }
//   ],
//   'Boston': [
//     { name: 'Jane', age: 20, city: 'Boston' },
//     { name: 'Mary', age: 25, city: 'Boston' }
//   ]
// }

// 빈 배열 테스트
console.log(groupBy([], 'age'));
// 출력: {}

// 존재하지 않는 키로 그룹화
console.log(groupBy(people, 'country'));
// 출력: { 'undefined': [...] }
