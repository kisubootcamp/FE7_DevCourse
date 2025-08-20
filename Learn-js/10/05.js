// ES2022 (Private Field) #
class Person {
  #age;
  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }
  get age() {
    return this.#age;
  }
  set age(value) {
    if (value < 0) throw new Error("Invalid age");
    this.#age = value;
  }
}
const p1 = new Person("asdf", 22);
p1.age = 21; // age 수정 불가
console.dir(p1);
console.log(p1.age);

// 내 입맛대로 정리
// 1. #age => private 필드 만들기
// 2. p1.age 라고 속성처럼 접근하면 내부적으로 함수가 실행돼서 #age 값을 반환
// 3. p1.age = 21 이렇게 대입하면, 실제로는 새로운 속성을 age에 할당하려는 시도인데, 클래스에 세터가 없어서 무시
// 4. 외부에서 접근하지 못하도록 하기 위해 사용하는 건데, 세터를 사용하면 프라이빗 필드를 사용하는 의미가 없음

// #age는 금고 안에 물건
// get age()는 금고 안을 볼 수 있는 감시 카메라
// 감시 카메라로 볼 수만 있고, 다른 기능이 없으니(세터) 수정 불가
