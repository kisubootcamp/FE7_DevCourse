// 게터 getter: "얻는 사람", "얻는 기능"
// 세터 setter: "설정하는 사람". "설정하는 기능"
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.info = `${this.name}, ${this.age}`;
  this.info2 = function () {
    return `${this.name}, ${this.age}`;
  };
}

const p1 = new Person("홍길동", 20);
console.log(p1);
console.log(p1.info);
console.log(p1.info2());
p1.name = "park"; //info는 바꾼 값이 반영되지 않음
console.log(p1);
console.log(p1.info);
console.log(p1.info2());

//속성 값을 가져오는데 함수를 구현하는 것은 비효율적.
//getter(값을 가져오려고 할 때), setter(값을 할당하려고 할 때)
Object.defineProperty(Person.prototype, "fullName", {
  get: function () {
    return `${this.name} ${this.age}`;
  },
  set: function (value) {
    const [name, age] = value.split(" ");
    this.name = name;
    this.age = age;
  },
});

console.log(p1.fullName);
p1.fullName = "minkyeong 25";
console.log(p1.fullName);
