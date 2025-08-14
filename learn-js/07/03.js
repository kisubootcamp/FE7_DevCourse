function createUser(name) {
  let _name = name; // _private
  return {
    getName: () => _name,
    setName: (newName) => (_name = newName),
  };
}

const user = createUser("kim");
console.log(user.getName());
user.setName("park");
console.log(user.getName());
// user = null;
user.setName = null;
user.getName = null;

const user2 = createUser("park");
console.log(user2.getName());
// user2 = null;
user2.setName = null;
user2.getName = null;
