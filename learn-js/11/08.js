const obj = Object.create({ inherited: 1 });
obj.own = 2;

console.log("own222" in obj);
console.log(obj.hasOwnProperty("own"));
console.log(Object.hasOwn(obj, "inherited"));
