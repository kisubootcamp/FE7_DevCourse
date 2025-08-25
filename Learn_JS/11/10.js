const obj = Object.create({inherited: 1});
obj.own = 2

console.log("own222" in obj);
console.log("own" in obj);
console.log(obj.hasOwnProperty("own"));
console.log(Object.hasOwn(obj, "own"));
console.log(Object.getOwnPropertyDescriptor(obj, "own"));