const obj = Object.create({ inherited: 1 });
obj.own = 2;

console.log("own" in obj);
console.log("own222" in obj);

console.log(obj.has);
console.log("own" in obj);
console.log("own" in obj);