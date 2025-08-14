// 예제 더 살펴보기

function createUser(name) {
  let _name = name; // _ private

  return {
    getName: () => _name, // 속성의 값이 함수, 4번째 줄을 참조 중
    setName: (newName) => (_name = newName),
  }; // 데이터 은닉
}
let user = createUser("kim"); // getName 변경 불가
// const -> let :: 재할당
console.log(user.getName());
user.setName("park"); // getName 변경 하려면
console.log(user.getName());
user = null;
// 가비지 컬렉터가 가비지 컬렉션을 수행 가능하도록 의무적으로 해야 함
// undefined 는 안 될까? ::
// undefined을 넣는 행위 자체는 필요는 없지만 가능은 함, 콜스텍과의 연결을 끊어버려야 가비지 컬렉센 수행, 의미론적으로 동일
// -> 결론 가능, 안 하는 이유는 널이 더 확실함, 권장됨

let user2 = createUser("lee");
console.log(user2.getName());
user2 = null;
