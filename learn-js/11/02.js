// 객체 메서드의 this
const objects = {
  name: "kim",
  greet: function () {
    console.log(this.name); // 더 직관적이어서 실무에서 많이 씀
    //consoke.log(objects.name); 되긴 함
  },
  greet2() {
    //단축 속성 방식. 실무에서 더 많이 씀
    console.log(this.name);
  },
};

// arr의 요소를 a와 b에 할당
const arr = ["apple", "banana"];
const [a, b] = arr;

// Obejct.entries(), keys(), values
const person = {
  name: "John",
  age: 30,
};

Object.entries(person).forEach(([key, value]) => {
  console.log(key, value);
});
