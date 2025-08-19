class Person {
  constructor(last, first) {
    this.lastName = last;
    this.firstName = first;
  }

  //게터는 함수가 아니다. 크롬에서 옅은 글씨
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  set fullName(value) {
    //[this.lastName, this.firstName] = value.split(" ");
    this.fillName = value;
  }

  get reverseName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const p1 = new Person("Kim", 20);
//똑같은 값을 세팅하지 않은다
p1.fullName = "park moon";
