// 문제 2번 - for
let primes = [];
for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let n = 2; n < i; n++) {
    if (i % n === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    primes.push(i);
  }
}
console.log(primes);

// 문제 2번 - while
primes = [];
let i = 2;

while (i <= 100) {
  let isPrime = true;
  let n = 2;

  while (n < i) {
    if (i % n === 0) {
      isPrime = false;
      break;
    }
    n++;
  }

  if (isPrime) {
    primes.push(i);
  }

  i++;
}
console.log(primes);

// 문제 2번 - do..while
primes = [];
i = 2;

do {
  let isPrime = true;
  let n = 2;

  while (n < i) {
    if (i % n === 0) {
      isPrime = false;
      break;
    }
    n++;
  }

  if (isPrime) {
    primes.push(i);
  }

  i++;
} while (i <= 100);

console.log(primes);
