const hasOwnKey = (obj, key) => Object.hasOwn(obj, key);

const obj = Object.create({ inherited: 1 });
obj.own = 2;

console.log(hasOwnKey(obj, "own")); // true
console.log(hasOwnKey(obj, "inherited")); // false
console.log(hasOwnKey({}, "a")); // false
console.log(hasOwnKey({ a: undefined }, "a")); // true
