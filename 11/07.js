const person = {
  name: "kim",
};

// value
// writable
// enumerable
// configurable
Object.defineProperty(person, "age", {
  value: 20,
  enumerable: true,
  writable: true,
  configurable: false,
});

Object.defineProperties(person, {
  job: {
    value: "developer",
    enumerable: true,
  },
  salary: {
    value: 5000,
    enumerable: true,
  },
});

console.log(person);
