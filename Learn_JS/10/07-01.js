const { M } = require("vitest/dist/chunks/reporters.d.BFLkQcL6.js");

class MathUtils{
    static PI = 3.14149265329;
    static add(a, b){
        return a + b;
    }
    static minus(a, b){
        return a - b;
    }
}

console.log(MathUtils.PI);
console.log(MathUtils.add(10, 20));
console.log(MathUtils.minus(10, 20));