// static은 class 인스턴스와 무관하게 값을 결정하고 쓸 때 그냥 하는 거인 듯
class MathUtils {
  static PI = 3.141592;
  static add(a, b) {
    return a + b;
  }

  static minus(a, b) {
    return a - b;
  }
}

console.log(MathUtils.PI);
console.log(MathUtils.add(10, 20));
console.log(MathUtils.minus(10, 20));
