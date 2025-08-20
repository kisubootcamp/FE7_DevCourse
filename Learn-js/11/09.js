/* ------------------------------------------------------------------------------------------------------------- */
// 1. 조회·반복(Iteration)
/* ------------------------------------------------------------------------------------------------------------- */
// Object.keys / Object.values / Object.entries
// 객체의 키·값을 배열로 뽑아 고차 함수(map/filter/reduce 등)와 조합하기 좋음
const user = { id: 1, name: "Lee", admin: true };

Object.keys(user); // ['id','name','admin']
Object.values(user); // [1,'Lee',true]
Object.entries(user); // [['id',1],['name','Lee'],['admin',true]]

// 값 중 boolean만 필터링
const onlyBools = Object.entries(user)
  .filter(([, v]) => typeof v === "boolean")
  .reduce((acc, [k, v]) => {
    acc[k] = v;
    return acc;
  }, {});
// { admin: true }
/* ------------------------------------------------------------------------------------------------------------- */
// Object.fromEntries
// entries로 가공한 뒤 다시 객체로 되돌릴 때 필수
const pairs = [
  ["id", 1],
  ["name", "Lee"],
];
const obj1 = Object.fromEntries(pairs); // { id: 1, name: 'Lee' }

// 값에 null 제거(정제 파이프라인)
const cleaned = Object.fromEntries(
  Object.entries({ a: 1, b: null, c: 3 }).filter(([, v]) => v != null)
); // { a: 1, c: 3 }

/* ------------------------------------------------------------------------------------------------------------- */
// Object.hasOwn (ES2022)
// 프로토타입 체인에 있는 키가 아니라 자기 자신의 키인지 안전하게 확인. in 연산자나 obj.hasOwnProperty보다 실수 적음
const obj2 = Object.create({ inherited: 1 });
obj2.own = 2;

"inherited" in obj2; // true (상속 포함)
Object.hasOwn(obj2, "own"); // true
Object.hasOwn(obj2, "inherited"); // false

/* ------------------------------------------------------------------------------------------------------------- */
// 2. 변환·병합(Transform/Merge)
/* ------------------------------------------------------------------------------------------------------------- */
// Object.assign
// 얕은 복사(Shallow copy) 및 여러 객체 병합. 디폴트 옵션 합치기에도 활용
const defaults = { page: 1, pageSize: 20, sort: "date" };
const userOpt = { pageSize: 50 };
const finalOpt = Object.assign({}, defaults, userOpt);
// { page:1, pageSize:50, sort:'date' }

/* ------------------------------------------------------------------------------------------------------------- */
// 스프레드 문법({...obj})
// 가독성 좋은 얕은 복사/병합. Object.assign과 동일 목적, 코드가 짧아 실무에서 더 자주 씀
const a = { x: 1 },
  b = { y: 2 };
const merged = { ...a, ...b }; // { x:1, y:2 }

/* ------------------------------------------------------------------------------------------------------------- */
// Object.groupBy? (혼동 주의)
// 표준 groupBy는 Array에 있습니다(Array.prototype.groupBy, ES2024). Object에는 없습니다. 헷갈리기 쉬워서 메모!

/* ------------------------------------------------------------------------------------------------------------- */
// 3. 불변성·잠금(Safety)
/* ------------------------------------------------------------------------------------------------------------- */
// Object.freeze / Object.isFrozen
// 객체를 동결(추가·삭제·값 변경 불가)하여 불변 데이터 보장. 테스트·상수 설정에 유용
const CONFIG = Object.freeze({ env: "prod", retry: 3 });
// CONFIG.retry = 5; // 무시(비엄격) 또는 에러(엄격)
Object.isFrozen(CONFIG); // true

/* ------------------------------------------------------------------------------------------------------------- */
// Object.seal / Object.isSealed
// 키 추가·삭제는 막되, 기존 값 변경은 허용. 스키마 고정하되 값은 바뀔 수 있게
const state = { count: 0 };
Object.seal(state);
// delete state.count; // 불가
state.count = 1; // 가능

/* ------------------------------------------------------------------------------------------------------------- */
// Object.preventExtensions / Object.isExtensible
// 키 추가만 금지. 삭제/수정은 가능. 확장만 막고 싶을 때
const obj = { a: 1 };
Object.preventExtensions(obj);
// obj.b = 2; // 불가

/* ------------------------------------------------------------------------------------------------------------- */
// 4. 프로퍼티 제어(Descriptors)
/* ------------------------------------------------------------------------------------------------------------- */
// Object.getOwnPropertyDescriptor(s)
// 프로퍼티의 세부 속성(value, writable, enumerable, configurable, get/set)을 검사
const user2 = {};
Object.defineProperty(user2, "id", {
  value: 1,
  writable: false,
  enumerable: true,
  configurable: false,
});
Object.getOwnPropertyDescriptor(user2, "id");
// { value:1, writable:false, enumerable:true, configurable:false }

/* ------------------------------------------------------------------------------------------------------------- */
// Object.defineProperty / Object.defineProperties
// 읽기 전용, 숨김(열거 불가) 속성, 게터/세터 등 정교한 제어가 필요할 때
const account = { _balance: 0 };
Object.defineProperty(account, "balance", {
  get() {
    return this._balance;
  },
  set(v) {
    if (v < 0) throw new Error("Negative!");
    this._balance = v;
  },
  enumerable: true,
});

account.balance = 100;
console.log(account.balance); // 100

/* ------------------------------------------------------------------------------------------------------------- */
// 5. 프로토타입 유틸(Prototype)
/* ------------------------------------------------------------------------------------------------------------- */
// Object.create
// 특정 프로토타입을 갖는 객체 생성. 동결된 템플릿을 상속하거나 딕셔너리 객체(프로토타입 없는 객체) 만들 때 유리
const proto = {
  greet() {
    return `Hi ${this.name}`;
  },
};
const u = Object.create(proto);
u.name = "Kim";
u.greet(); // "Hi Kim"

// 순수 딕셔너리(키 충돌 방지)
const dict = Object.create(null);
dict["__proto__"] = "safe"; // 정상 키로 취급

/* ------------------------------------------------------------------------------------------------------------- */
// Object.getPrototypeOf / Object.setPrototypeOf
// - 프로토타입 확인·교체.
// 단, `setPrototypeOf`는 **성능 저하**가 크므로 초기 설계 단계에서 `Object.create`로 구조를 잡는 편이 좋습니다.
const o = {};
Object.getPrototypeOf(o) === Object.prototype; // true

/* ------------------------------------------------------------------------------------------------------------- */
