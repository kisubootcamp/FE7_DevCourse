// (2) class 
// 훨씬 간단해짐 (sugar.)

class Person {
  constructor(lastName,firstName){ // 필요없으면 안 써도 됨
    this.lastName=lastName;
    this.firstName=firstName;
  }

  get fullName(){
    return `${this.lastName} ${this.firstName}`
  }
  // getter는 함수로 보지 않는다, getter는 getter다. 
  // -> 'fullName이라는 이름의 getter'라고 지칭 (getter는 여러 개가 될 수 있음)

  set fullName(value){
    [this.lastName, this.firstName] = value.split(" ");
  }
}

const p1 = new Person("byeon","sooyeon");
p1.fullName = "kim chulsu"; // set에 의해 변경 되었다
console.dir(p1);
console.log(p1.fullName);

// 주의할 점
/*
set fullName(value){
  this.fullNmae = vlaue;
}
  */
// RangeError : Maximum call stack size exceeded
// ㄴ 무한 루프, 콜스텍에 실행컨텍스트가 무한히 쌓여서 더 이상 감당할 수 없는 용량이 될 때
// ㄴ 왜? :: this.fullNmae = vlaue; -> setter식별자와 똑같은 값에 식별하지 않는다 (?)