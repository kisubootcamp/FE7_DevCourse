class MathUtils {
	static PI = 3.14159265359;
	static add(a, b) {
		return a + b;
	}
	static minus(a, b) {
		return a - b;
	}
}

const m1 = new MathUtils();
// 정적속성으로만 클래스 정의했기 때문에 출력되는게 따로 없음
console.log(m1); // MathUtils {}
console.log(MathUtils.PI);
console.log(MathUtils.add(10, 20));
console.log(MathUtils.minus(10, 20));
