// 문제 2: 배열 내 객체 그룹화
function groupBy(arr, key) {
    return arr.reduce((r, v) => {
        if (!r[v[key]]) {
            r[v[key]] = [];
        }
        r[v[key]].push(v);
        return r;
    }, {})
}
  
  const people = [
    { name: 'John', age: 20, city: 'New York' },
    { name: 'Jane', age: 20, city: 'Boston' },
    { name: 'Mark', age: 25, city: 'New York' },
    { name: 'Mary', age: 25, city: 'Boston' },
    { name: 'James', age: 30, city: 'New York' }
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