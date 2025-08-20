// 1
function mergeObjects(obj1, obj2) {
  return {
    ...obj1,
    ...obj2,
  };
}

// 2
function objectToArray(obj) {
  return Object.keys(obj).map((val) => [val, obj[val]]);
}

// 3
function deleteKey(obj, keyTodelete) {
  delete obj[keyToDelete];
  return obj;
}

// 4
function findKeyByValue(obj, value) {
  let result = Object.keys(obj).find((key) => value === obj[key]);
  return result ? result : null;
}

function findKeyByValue(obj, value){
    for (const k in obj){
        if(Object.hasOwn(obj, k) && obj[k] === value) return k;
    }
    return null;
}

// 5
function multiplyValues(obj) {
  return Object.keys(obj).reduce((total, val) => (total *= obj[val]), 1);
}

// 6
function hasOwnKey(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

// 7
function pick(obj, keys) {
  return keys.reduce((total, key) => {
    if (obj.hasOwnProperty(key)) {
      return { ...total, [key]: obj[key] };
    }
    return total;
  }, {});
}

// 8 
function omit(obj, keys) {
  return Object.keys(obj).reduce((result, key) => {
    if (!keys.includes(key)) {
      result[key] = obj[key];
    }
    return result;
  }, {});
}