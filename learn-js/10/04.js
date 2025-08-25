// class를 이용한 private

class Person{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}

const p1 = new Person("kim",20);
p1.age = 30; // 외부 접근으로 값 변경 가능
console.log(p1.age);

// ES2022(13) - private field

class PrivatePerson{
  #age;
  constructor(name,age){
    this.name = name;
    this.#age = age;
  }

  get age() {
    return this.#age;
  }
  // 접근 가능(?), 바꿀 수 있다는건 아님

  set age(value){
    this.#age=value;
  }
  // 수정 가능, 근데 이제 #필드를 사용한 의미가 없어짐
  // 앵간한 상황아니면 쓰지 않는게...
}

const p1 = new PrivatePerson("kim",20);

p1.age=50;
console.log(p1);
// # 에 감춰짐, node.js 환경에서 안 보임 (웹브라우저에서 보임, 접근 가능하다는 말은 아님)
// ㄴ 접근은 get 사용
console.log(p1.#age); // Private field(#필드)를 class 밖에서 쓰지 말라는 에러