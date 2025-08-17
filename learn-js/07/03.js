function createUser(name) {
  let _name = name; // _ private
  return {
    getName: () => _name,
    setName: (newName) => (_name = newName),
  };
}

const user = createUser("kim");
console.log(user.getName());
user.setName("park");
console.log(user.getName());

user.getName = null;
user.setName = null;

const user2 = createUser("park");
console.log(user2.getName());

user2.getName = null;
user2.setName = null;
