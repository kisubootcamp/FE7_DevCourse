// const sum = (a, b) => a + b;
// function calculator(fn){
//     console.log(fn(10, 2));
// }
// calculator(sum);

// function a(){
//     return () => "greet";
// }
// const greet = a();
// console.log(greet()); 

function createUser(name) {
    let _name = name; // private
    return {
        getName: () => _name,
        setName: (newName) => (_name = newName),
    };
}

let user = createUser("kim");
console.log(user.getName());
user.setName("park");
console.log(user.getName());
user = null;

let user2 = createUser("park");
console.log(user2.getName());
user2 = null;

