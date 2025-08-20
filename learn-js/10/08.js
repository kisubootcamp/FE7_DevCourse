class Person{
  constructor(name,age){
    this.name = name;
    this.age=age;
  }

  toString(){
    return `${this.name}(${this.age})`;
  }
}

// toString도 오버라이딩이 가능
// object 에 toString이 있는걸 person 에다가 재정의 해버리면
// 굳이 object까지 체이닝 하지 않아도 중간에 찾을 수 있어서 멈춤

const p = new Person("Kim", 20);
console.log(String(p));
console.log(p.toString());
// 둘이 결과는 같은데, 과정?이 좀 다름
// 
console.dir(p);