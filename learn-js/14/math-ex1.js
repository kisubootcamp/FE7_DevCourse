{
	// 문제: 주어진 숫자의 절댓값을 반환하는 함수를 작성하세요.
	function getAbsoluteValue(num) {
		return Math.abs(num);
	}

	// 테스트 케이스
	console.log(getAbsoluteValue(-5)); // 5
	console.log(getAbsoluteValue(3)); // 3
}

{
	// 문제: 주어진 숫자를 반올림하는 함수를 작성하세요.
	function roundNumber(num) {
		return Math.round(num);
	}

	// 테스트 케이스
	console.log(roundNumber(4.6)); // 5
	console.log(roundNumber(4.4)); // 4
}

{
	// 문제: 주어진 두 숫자 중 최대값을 반환하는 함수를 작성하세요.
	function getMax(a, b) {
		return Math.max(a, b);
	}

	// 테스트 케이스
	console.log(getMax(10, 20)); // 20
	console.log(getMax(-5, -3)); // -3
}

{
	// 문제: 주어진 두 숫자 중 최소값을 반환하는 함수를 작성하세요.
	function getMin(a, b) {
		return Math.min(a, b);
	}

	// 테스트 케이스
	console.log(getMin(10, 20)); // 10
	console.log(getMin(-5, -3)); // -5
}

{
	// 문제: 주어진 숫자의 제곱근을 반환하는 함수를 작성하세요.
	function calculateSquareRoot(num) {
		return Math.sqrt(num);
	}

	// 테스트 케이스
	console.log(calculateSquareRoot(16)); // 4
	console.log(calculateSquareRoot(25)); // 5
}

{
	// 문제: 주어진 범위 내에서 무작위 정수를 생성하는 함수를 작성하세요.
	function getRandomInt(min, max) {
		return Math.ceil(Math.random() * (max - min) + min);
	}

	// 테스트 케이스
	console.log(getRandomInt(1, 10)); // 1과 10 사이의 무작위 정수
}

{
	// 문제: 주어진 숫자의 거듭제곱을 계산하는 함수를 작성하세요.
	function power(base, exponent) {
		return Math.pow(base, exponent);
	}

	// 테스트 케이스
	console.log(power(2, 3)); // 8
	console.log(power(5, 2)); // 25
}

{
	// 문제: 주어진 각도의 사인을 계산하는 함수를 작성하세요. (각도는 라디안으로 입력)
	function calculateSine(angle) {
		return Math.sin(angle);
	}

	// 테스트 케이스
	console.log(calculateSine(Math.PI / 2)); // 1
	console.log(calculateSine(0)); // 0
}

{
	// 문제: 주어진 반지름으로 원의 면적을 계산하는 함수를 작성하세요.
	function calculateCircleArea(radius) {
		return Math.PI * Math.pow(radius, 2);
	}

	// 테스트 케이스
	console.log(calculateCircleArea(5)); // 78.53981633974483
}
