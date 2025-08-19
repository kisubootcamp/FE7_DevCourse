### 클래스

- 사실 클래스도 내부 슬롯을 추적해가며 하는 프로토타입 객체랑 똑같다.
- 클래스 내에는 this 필요 없음
- 나머지 인스턴스 객체나 그런 부분은 생성자 함수와 똑같음
- 클래스 내에서의 함수는 constructor를 사용해서 초기화를 함
  - 클래스 내의 함수 안에서는 this 사용됨
  - constructor가 있으면 new로 부르면 호출이 자동으로 됨
- 클래스의 내부 함수는 프로토타입 쪽에 자동으로 등록됨(클래스 자체에 등록되는 게 아니라)
- 클래스 내에서 프로토타입에 속성을 등록하고 싶으면 결국 생성자 함수때와 똑같이 써야된다

```
생성자 함수.prototype.속성(변수) 이름 = "내용";
```

### 생성자 함수에서의 getter와 setter

- Object의 defineProperty 메서드를 사용함
- get : 특정한 메서드 사용할 때
  - getter를 한 값을 출력할 때 출력되는 것
- set : 특정한 메서드 세팅할 때
  - setter가 없으면 값이 바뀌지 않음, set은 어떤 값이 바뀔 때 실행되는 것

```
Object.defineProperty(Person.prototype, "fullName", {
  get: function () {
    return `${this.lastName} ${this.firstName}`;
  }, //매개변수가 없게 지정해줘야 함(get은)
  set: function (value) {
    const [lastName, firstName] = value.split(" ");
    this.lastName = lastName;
    this.firstName = firstName;
    //어떠한 값에 값이 설정될 때 실행이 되는 것
  }, //set은 매개변수를 받아줘야 함
});
```

##### 클래스에서 getter, setter 바뀐 것

- get: 그냥 메서드 앞에 get 붙인다고 생각

```
  get 메서드 변수 이름() {}
```

- set: set 도 마찬가지로 그냥 앞에 set 붙이고 매개변수 받는 것

```
  set 메서드 변수 이름(매개변수) {}
```

- 주의사항 : set이 call stack 이 exceeded이 되는 에러나 날 때가 있다.
  - 이 에러는 보통 무한루프일 때 나오는 것
  - setter 함수 내에 식별자와 똑같은 코드(변수)를 할당하려고 할 때는 무한루프 떄문에 오류가 생김

```
  set fullName(value) {
    this.fullName = value;
  }
```

##### 클래스에서 프라이빗 변수 하는 방법(클래스 외부에서 내부의 변수를 직접적으로 변경할 수 없게 하는 방법)

- #변수 이름; 을 쓰면 됨
- constructor에서도 this.#변수이름 이런 식으로 써야됨

##### static 메서드(정적 메서드)

- 인스턴스 객체에서 접근이 불가능
- 인스턴스 객체가 아니라 class 이름 자체를 찍고 접근해야 함
  - p1.greet() 이런 인스턴스 객체가 아니라 Person.greet() 이런 식으로 class 이름 자체로
- static 메서드 안에서는 this로 제대로된 접근을 할 수 없음

##### class 에서의 상속

- 두 클래스가 있으면, 상속받고 싶은 애 옆에 extends 상속하는 클래스 이름 쓰면 됨
- super(변수 이름들) 이건 부모의 생성자를 호출하는 것
- 인스턴스 객체가 그 클래스의 인스턴스가 맞는지 확인하는 instanceof 는 상속받은 인스턴스 객체면 상속 해준 부모 객체도 true로 나옴
- 오버라이딩 : 부모 클래스에 있는 메서드를 자식 메서드에서 다시 정의했을 때, 부모 메서드는 안 나오고 자식 메서드에 대한 출력값만 나오는 것
