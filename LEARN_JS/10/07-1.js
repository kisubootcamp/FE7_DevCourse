class MathUtils {
  static PI = 3.141592;
  static add(a, b) {
    return a + b;
  }
  static minus(a, b) {
    return a - b;
  }
}
const m1 = new MathUtils();
console.log(m1);

console.log(MathUtils.PI);
console.log(MathUtils.add(2, 3));
console.log(MathUtils.minus(5, 2));
// 정적 매서드는 독립적으로 호출할 수 있다.
// console.log(m1.add(2, 3)); // 인스턴스에서 호출할 수 없다.
