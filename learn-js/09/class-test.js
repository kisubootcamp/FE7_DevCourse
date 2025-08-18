// 클래스 선언 (ES6)
class C1 {
}
console.log(C1, typeof C1, C1 instanceof Function);  // [class C1] function true
console.log(Reflect.ownKeys(C1));  // [ 'length', 'name', 'prototype' ]
console.log(C1.length, C1.name, C1.prototype);  // 0 C1 {}
console.log(C1.prototype);   // {}
console.log(Reflect.ownKeys(C1.prototype));   // [ 'constructor' ]

let c1 = new C1();
console.log(c1);  // C1 {} 
console.log(typeof c1, c1 instanceof C1);  // object true
console.log(Reflect.ownKeys(c1));  // []
console.log(Reflect.ownKeys(c1.__proto__));  // [ 'constructor' ]
console.log(c1.__proto__.constructor);  // [class C1]
console.log(c1.constructor, typeof c1.constructor, c1.constructor instanceof Function);  // [class C1] function true
console.log(C1.prototype.constructor == c1.constructor);  // true
console.log(c1.__proto__.constructor == c1.constructor);  // true
console.log(Object.getPrototypeOf(c1), c1.__proto__);    // {}, {}
console.log(Object.getPrototypeOf(c1) == c1.__proto__);  // true
console.log(Object.getPrototypeOf(c1) == C1.prototype);  // true
console.log(Reflect.ownKeys(Object.getPrototypeOf(c1)));  // [ 'constructor' ]

console.log(c1.__proto__.__proto__ == Object.prototype);  // true
console.log(Reflect.ownKeys(c1.__proto__.__proto__));  // [
//     'constructor',
//     '__defineGetter__',
//     '__defineSetter__',
//     'hasOwnProperty',
//     '__lookupGetter__',
//     '__lookupSetter__',
//     'isPrototypeOf',
//     'propertyIsEnumerable',
//     'toString',
//     'valueOf',
//     '__proto__',
//     'toLocaleString'
//   ]
console.log(c1.toString());  // [object Object]
console.log(c1.valueOf(3));  // C1 {}
