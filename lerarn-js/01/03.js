console.log(Number.MAX_SAFE_INTEGER);

console.log(9007199254740991 + 10);

const aBig = BigInt(9007199254740991n);
const bBig = BigInt(10n);
console.log(aBig + bBig);
