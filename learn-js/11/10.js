const obj = Object.create({ inherited: 1});
obj.own = 2;
console.log("own" in obj);
console.log(obj.hasOwnProperty("own"));
console.log(Object.hasOwn(obj, "own"));
console.log(Object.hasOwn(obj, "inherited"));

console.log(Object.getOwnPropertyDescriptor(obj, "own"));
console.log(Object.getOwnPropertyDescriptors(obj));
console.log(Object.getOwnPropertyDescriptor(obj, "inherited"));
