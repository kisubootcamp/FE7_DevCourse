// 연습 문제 +(++)
/// 풀이

// 1.
class Account{
  #balance = 0; // 변수 필드
  deposit(amount){ // constructor 필요 없으면 안 써도 됨 (인자값 없을 때)
    if (typeof amount !== "number" || amount <= 0) throw new Error("Invalid");
      this.#balance += amount;
  }
  withdraw(amount){
     if (typeof amount !== "number" || amount <= 0) throw new Error("Invalid");
      this.#balance -= amount;
  }
  get balance(){
    return this.#balance;}
}

const acc = new Account();
acc.deposit(100);
acc.withdraw(30);
console.log(acc.balance); // 70

// 2.
class Vehicle{
  constructor(name){
    this.name=name;
  }
  info(){
    return `차량: ${this.name}`;
  }
}

class Car extends Vehicle{
  constructor(name, brand){
    super(name); // 퍼오기
    this.brand = brand;
  }
  info(){
    return `브랜드: ${this.brand}, 차량: ${this.name}`;
  }
}

const v = new Vehicle("스쿠터");
const c = new Car("아반떼", "Hyundai");
console.log(v.info()); // 차량: 스쿠터
console.log(c.info()); // 브랜드 Hyundai, 차량: 아반떼

// 3.
class Temperature {
  static c2f(c){
    return c * 9/5 + 32;
  } 
  static f2c(f){
    return (f - 32) * 5/9;
  }
}

console.log(Temperature.c2f(0));   // 32
console.log(Temperature.f2c(212)); // 100

// 4.
class User{
  constructor(firstName,lastName){
     this.first = firstName;
     this.last = lastName;
  }

  get fullName(){
    return `${this.first} ${this.last}`;
  }

  set fullName(value){
    [this.first, this.last] = value.split(" ");
  }
}

const u = new User("길동", "홍");
console.log(u.fullName); // 길동 홍
u.fullName = "민수 김";
console.log(u.first, u.last); // 민수 김

// 5.
class QueryBuilder{
  constructor(){ // 인자값이 없지만 처음 값을 위해 사용
    this.parts = { select: "", form: "", where: ""};
  }
  select(se){
    this.parts.select = se;
    return this;
  }
  from(fr){
     this.parts.from = fr;
    return this;
  }
    where(wh){
     this.parts.where = wh;
    return this;
  }
  build(){
    return `SELECT ${this.parts.select} FORM ${this.parts.from} WHERE ${this.parts.where}`;
  }
}

const q = new QueryBuilder()
  .select("name, age")
  .from("users")
  .where("age >= 18")
  .build();
console.log(q); // SELECT name, age FROM users WHERE age >= 18

// 6.
class Person{
  constructor(name){
    this.name = name;
  }
  greet (){
    return `${this.name}님, 안녕하세요!`; // 기본 등록
  }
}

const p = new Person("이순신");
console.log(p.greet()); // 이순신님, 안녕하세요!

// 7.
class Book{
  static count = 0;
  constructor(title){ // 한 번은 호출됨
    this.title=title;
    Book.count++;
  }
  static getCount(){
    return Book.count;
  }
}

const b1 = new Book("1984");
const b2 = new Book("나니아");
console.log(Book.getCount()); // 2