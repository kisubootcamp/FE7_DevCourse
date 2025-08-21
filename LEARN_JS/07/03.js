function createUser(name) {
  let _name = name; // private
  return {
    getName: () => _name,
    setName: (newName) => (_name = newName),
  };
}

const user = createUser("Kim");
console.log(user.getName()); // Kim
user.setName("park");
console.log(user.getName()); // park
user = null; //가비지 컬렉터가 가비지 컬렉션을 수행할 수 있도록 참조를 제거

const user2 = createUser("park");
console.log(user2.getName()); // park
user2 = null;
