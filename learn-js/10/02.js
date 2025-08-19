// 1. 게터(getter)
// 1.1 getter -> get + -er -> "얻는 사람" 또는 "얻는 기능"
// 2. 세터(setter)
// 2.1 set + -er -> "설정하는 사람" 또는 "설정하는 기능"

function Person(lastName, firstName) {
  this.lastName = lastName;
  this.firstName = firstName;
  // this.info = `${this.name}, ${this.age}`;
  // 이렇게 적은 값들은 인스턴스 객체를 선언할 때 변수가 픽스돼서 변수를 바꿔도 얘는 바뀌지 않음
}

Object.defineProperty(Person.prototype, "fullName", {
  get: function () {
    return `${this.lastName} ${this.firstName}`;
  }, //매개변수가 없게 지정해줘야 함(get은)
  set: function (value) {
    const [lastName, firstName] = value.split(" ");
    this.lastName = lastName;
    this.firstName = firstName;
    //어떠한 값에 값이 설정될 때 실행이 되는 것
  }, //set은 매개변수를 받아줘야 함
});

const p1 = new Person("kim", "kisu");
p1.fullName = "park chulsu";
console.log(p1.lastName);
console.log(p1.firstName);
console.log(p1.fullName);
// p1.lastName = "park"; //get, set을 쓰면 이렇게 중간에 바꿔도 바뀐 값으로 나옴
