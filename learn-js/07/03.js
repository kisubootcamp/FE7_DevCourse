function createUser(name) {
  let _name = name;
  return {
    getName: () => _name,
    setName: (newName) => (_name = newName),
  };
}

//독립적인 클로저 함수
let user = createUser("kim");
console.log(user.getName());
user.setName("park");
console.log(user.getName());

//user = null; //undefined는 안될까?
user.getName = null; //이것도 가능. 참조 연결고리만 끊어주면 다 가능!
user.setName = null;

let user2 = createUser("jeong");
console.log(user2.getName());
user2 = undefined; //가능하다!
