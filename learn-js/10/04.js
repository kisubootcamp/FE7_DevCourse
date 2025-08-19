// ES2022
class Person {
	#age; // << 이렇게 # 기호를 붙여 작성하면 프라이빗 필드가 됨
	constructor(name, age) {
		this.name = name;
		this.#age = age;
	}
	// 숨기면 접근할 수 있는 수단이 필요함
	get age() {
		return this.#age;
	}

	// 일케 하면 프라이빗을 사용하는 의미가 없긴한데
	set age(value) {
		if (value < 0) throw new Error("Invalid age");
		this.#age = value;
		// 의도적으로 특정 값을 막고자할때는 사용?
	}
}

const p1 = new Person("kim", 20);
// p1.#age = 21; // 이제 이거 안됨 ㅋㅋ
console.log(p1.age); // 이렇게 하면 get으로 발동
p1.age = -10; // 이렇게 하면 set으로 발동

// 근디 프라이빗 필드가 IE(구버전) 에서는 지원이 안됨 ㅋㅋㅋ

// 프라이빗 패턴을 사용해서 속성값 접근못하게 하기
// 혹은 프라이빗 패턴으로 어떠한 속성값 의도적으로 적용 못하게 하기

// 게터와 세터는 메서드인가? 메서드의 일종으로 보면 될 것 같음
