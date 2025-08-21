// 연습 문제 (초급)

// 1.

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergeObjects1 = Object.assign({},obj1, obj2);
console.log(mergeObjects1); // { a: 1, b: 3, c: 4 }

///
// 작동이 안 됨 : 다시
/*
function mergeObjects(obj1, obj2){
return ...obj1, ...obj2;
}
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }
*/

const obj3 = { x: 10 };
const obj4 = { y: 20 };
const mergeObjects2 = Object.assign({},obj3, obj4);
console.log(mergeObjects2); // { x: 10, y: 20 }

const obj5 = { a: 1, b: 2 };
const obj6 = { a: 3, b: 4 };
const mergeObjects3 = Object.assign({},obj5, obj6);
console.log(mergeObjects3); // { a: 3, b: 4 }

const obj7 = {};
const obj8 = { z: 5 };
const mergeObjects4 = Object.assign({},obj7, obj8);
console.log(mergeObjects4); // { z: 5 }

// 2.

// Object.entries
const obj9 = { a: 1, b: 2, c: 3 };
const objectToArray = Object.entries(obj9);
console.log(objectToArray); // [['a', 1], ['b', 2], ['c', 3]]

const obj10 = { x: 5, y: 10 };
const objectToArray2 = Object.entries(obj10);
console.log(objectToArray2); // [['x', 5], ['y', 10]]

const obj11 = { p: 3 };
const objectToArray3 = Object.entries(obj11);
console.log(objectToArray3); // [['p', 3]]

const obj12 = {};
const objectToArray4 = Object.entries(obj12);
console.log(objectToArray4); // []

// 3. ?

// delete user.age;
const obj13 = { a: 1, b: 2, c: 3 };
delete obj13.b;
console.log(obj13);

/// 깊은 복사
// 작동이 안 됨 : 다시
/*
function deleteKey(obj13,key){
  const copy = structuredClone(obj13);
  delete copy[key];
  return copy;
}
const obj13 = { a: 1, b: 2, c: 3 };
const keyToDelete = 'b';
deleteKey(obj13,keyToDelete) = delete obj13.keyToDelete;
console.log(deleteKey(obj13, keyToDelete)); // { a: 1, c: 3 }
*/

const obj14 = { x: 10, y: 20, z: 30 };
//const keyToDelete2 = 'y';
//console.log(deleteKey(obj14, keyToDelete2)); // { x: 10, z: 30 }
delete obj14.y;
console.log(obj14);

const obj15 = { a: 5 };
//const keyToDelete3 = 'a';
//console.log(deleteKey(obj15, keyToDelete3)); // {}
delete obj15.a;
console.log(obj15);

const obj16 = { m: 1, n: 2, o: 3 };
//const keyToDelete4 = 'p';
//console.log(deleteKey(obj16, keyToDelete4)); // { m: 1, n: 2, o: 3 }
delete obj16.p;
console.log(obj16);

////////////////////////////////////////////////////

// 4. *

///
function findKeyByValue(obj17, value) {
  for (const k in obj17){
    if (obj17[k]===value) return k;
  }
  return null;
}

const obj17 = { a: 1, b: 2, c: 3 };
console.log(findKeyByValue(obj17, 2)); // 'b'
console.log(findKeyByValue(obj17, 4)); // null
console.log(findKeyByValue(obj17, 1)); // 'a'
console.log(findKeyByValue({}, 1)); // null

// 5.

function multiplyValues(obj){
  let result = 1;
  for (const k in obj){
    if (Object.hasOwn(obj,k)) {
      result *= obj[k];
    }
  }
  return result;
}
// if문 없어도 작동, 안전장치

const obj18 = { a: 1, b: 2, c: 3 };
console.log(multiplyValues(obj)); // 6

const obj19 = { x: 2, y: 3, z: 4 };
console.log(multiplyValues(obj2)); // 24

const obj20 = { a: 1, b: 0, c: 3 };
console.log(multiplyValues(obj3)); // 0

const obj21 = {};
console.log(multiplyValues(obj4)); // 1 (곱셈의 항등원)

// 6

const hasOwnKey = (obj,key) => Object.hasOwn(obj,key);

const obj = Object.create({ inherited : 1});
obj.own = 2;

console.log(hasOwnKey(obj, "own"));        // true
console.log(hasOwnKey(obj, "inherited"));  // false
console.log(hasOwnKey({}, "a"));           // false
console.log(hasOwnKey({ a: undefined }, "a")); // true

// 7.

function pick(obj, keys){
  const out = {};
  for (const key of keys) {
    if (Object.hasOwn(obj, key)){
      out[key] = obj[key];
    }
  }
  return out;
}

console.log(pick({ a: 1, b: 2, c: 3 }, ["a", "c"])); // { a: 1, c: 3 }
console.log(pick({ x: 10, y: 20 }, ["z"]));          // {}
console.log(pick({}, ["a"]));                        // {}
console.log(pick({ a: 1 }, []));                     // {}

// 8.

function omit(obj, keys){
  const result = {};

  for (const key in obj){
    if (Object.hasOwn(obj, key)){
   let should = false; // 현재 key를 제외해야 할지 표시하는 플래그
    for (let i =0; i <keys.length; i++){
      if (keys[i]=key){
        should = true;
        break;
      }
    }

    if (!should) {
      result[key] = obj[key];
    }

   }
  }
  return result;
}
// 다중 반복문이라 좋은 코드는 아님

console.log(omit({ a: 1, b: 2, c: 3 }, ["b"]));    // { a: 1, c: 3 }
console.log(omit({ x: 10, y: 20 }, ["x", "y"]));   // {}
console.log(omit({}, ["a"]));                      // {}
console.log(omit({ a: 1, b: 2 }, []));             // { a: 1, b: 2 }

// uh...?