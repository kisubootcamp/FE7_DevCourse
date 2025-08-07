// for ~ in 범위기반 for문
// 객체의 key 순회

const obj = {
  name: "jiho",
  age: 27,
};

for (let key in obj) {
  console.log(obj[key]);
}

// for~of :value에 대한 순회 but, iterable객체에 대해서만 사용 가능
