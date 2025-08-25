// 1. 게터 (getter)
// 1.1 getter -> 얻는 사람, 얻는 기능
// 2. 세터 (setter)
// 2.1 setter -> 설정하는 사람, 설정하는 기능

// (1) 생성자 함수
// 복잡함

function Person(lastName, firstName){
  this.lastName = lastName;
  this.firstName = firstName;
  // 방법2: fullName은 인스턴스 객체 생성될 때의 값이 들어간 상태로 들어가서 후에 변경되지 않음 (단점)
  //this.fullName=`${this.lastName},${this.firstName}`; 

  // 방법3: 초기값 변경이 가능해짐 
  /*
  this.fullName = function (){
    return `${this.lastName},${this.firstName}`;
  }
    */
}

// 방법4: getter & setter
Object.defineProperty(Person.prototype, "fullName",{
  get: function () { // get은 매개변수 없게
    return `${this.lastName},${this.firstName}`; 
  },
  set: function (value) { // set은 매개변수 있게
  // 어떤 값을 *변경* 하려고 할 때 기능 / 어떤 속성 값에 값을 할당하려고 할 때 기능
  const [lastName, firstName] = value.split(" ");
  this.lastName = lastName;
  this.firstName = firstName;
  },
});

const p1 = new Person("byeon","sooyeon");

//console.log(`${p1.name},${p1.age}`); // 방법1: 여러 번 쓸 때 매번 호출의 귀찮음
//console.log(p1.info()); // 방법3: 메서드처럼 사용됨
p1.lastName = "park"
console.log(p1.fullName); // 방법4 : 속성처럼 사용할 수 있음