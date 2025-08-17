function createUser(name) {
  let _name = name; // _ private
  return {
    getName: () => _name,
    setName: (newName) => (_name = newName),
  };
}

const user = createUser('lee');
console.log(user.getName());
user.setName('park');
console.log(user.getName());
user = null; // undefined ? 

const user2 = createUser('choi');
console.log(user2.getName());
user2 = null;
