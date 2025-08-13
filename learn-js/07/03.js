// 은닉회 된 변수는 _(언더바)를 넣어준다

function createUser(name) {
  let _name = name; // _ private

  return {
    getName: () => _name,
    setName: (newName) => (_name = newName),
  };
}

const user = createUser("Kim");
console.log(user.getName());
user.setName("Jiho");
console.log(user.getName());

// 외부에서는 _name의 값을 변경 할 방법이 없음
