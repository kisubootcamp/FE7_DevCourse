const obj = Object.create({ inherited: 1});
obj.own = 2;
console.log("own" in obj);
console.log(obj.hasOwn(), "inherited")

console.log(Object.getOwnPropertyDescriptors)