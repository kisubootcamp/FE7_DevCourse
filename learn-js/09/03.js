//call
//Person.call(this, name, age);
//는 아래와 같다
//this.name = name;
//this.age = age;

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Developer(name, age, skill) {
  // this는 Developer
  Person.call(this, name, age); // this가 가리키는 대상을 설정하여 Person 함수를 실행
  // Developer의 name과 age 매개변수 속성으로 Person 함수를 실행해 변수를 만들게 된다

  // 즉! call을 사용한 위치에서 Person함수를 실행한다!
  this.skill = skill;
}
