let data = null;
// APU
const result = fetch(".....");
data = result;

function createUser(name) {
    let _name = name; // _ private
    return {
        getName: () => _name,
        setName: (newName) => (_name = newName),
    };
}

let user = createUser("kim");
console.log(user.getName());
user.setName("park");
console.log(user.getName());
user = null; // 메모리 해제
user.getName = null;
user.setName = null;

let user2 = createUser("park");
console.log(user2.getName());
user2 = null; // 메모리 해제
user2.getName = null;
user2.setName = null;