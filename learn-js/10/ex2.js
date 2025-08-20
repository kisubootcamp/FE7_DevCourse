// 연습 문제 +(++)

// 1.
class Account{
 
}

const acc = new Account();
acc.deposit(100);
acc.withdraw(30);
console.log(acc.balance); // 70

// 2.
class Vehicle{
  
}


const v = new Vehicle("스쿠터");
const c = new Car("아반떼", "Hyundai");
console.log(v.info()); // 차량: 스쿠터
console.log(c.info()); // 브랜드 Hyundai, 차량: 아반떼

// 3.
class Temperature {
 
}

console.log(Temperature.c2f(0));   // 32
console.log(Temperature.f2c(212)); // 100

// 4.
class User{
}

const u = new User("길동", "홍");
console.log(u.fullName); // 길동 홍
u.fullName = "민수 김";
console.log(u.first, u.last); // 민수 김

// 5.
class QueryBuilder{
  
}

const q = new QueryBuilder()
  .select("name, age")
  .from("users")
  .where("age >= 18")
  .build();
console.log(q); // SELECT name, age FROM users WHERE age >= 18

// 6.

// 7.