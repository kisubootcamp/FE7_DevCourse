{
	// 설명: 주어진 날짜가 주말(토요일 또는 일요일)인지 확인하는 함수를 작성하세요.
	function isWeekend(date) {
		const getDate = new Date(date);
		return getDate.getDay() === 0 || getDate.getDay() === 6 ? "주말" : "평일";
	}

	console.log(isWeekend("2024-10-26")); // 주말
	console.log(isWeekend("2024-10-29")); // 평일
	console.log(isWeekend("2024-10-27")); // 주말
}

{
	// 설명: 두 날짜 사이의 주차 수를 계산하는 함수를 작성하세요.
	function weeksBetween(date1, date2) {
		const d1 = new Date(date1);
		const d2 = new Date(date2);
		const diffTime = d2 - d1;
		const diffWeeks = diffTime / (1000 * 60 * 60 * 24) / 7;
		return `${Math.floor(diffWeeks)}주`;
	}

	console.log(weeksBetween("2024-01-01", "2024-02-01")); // 4주
	console.log(weeksBetween("2024-01-01", "2024-04-01")); // 13주
	console.log(weeksBetween("2024-06-01", "2024-08-01")); // 8주
}
{
	// 설명: 주어진 생일을 기준으로 다음 생일까지의 일수를 계산하세요.
	function daysUntilNextBirthday(date) {
		const today = new Date();
		const birth = new Date(date);

		if (
			today.getMonth() > birth.getMonth() ||
			(today.getMonth() === birth.getMonth() &&
				today.getDate() < birth.getDate())
		) {
			birth.setFullYear(today.getFullYear() + 1);
		} else {
			birth.setFullYear(today.getFullYear());
		}

		const diffTime = Math.abs(
			Math.ceil((birth - today) / (1000 * 60 * 60 * 24)),
		);
		return diffTime;
	}

	console.log(daysUntilNextBirthday("1990-05-15")); // 263
	console.log(daysUntilNextBirthday("2000-12-31")); // 128
	console.log(daysUntilNextBirthday("1985-08-25")); // 0
}
{
	// 설명: 주어진 연도와 월의 주 수를 계산하세요.
	function weeksInMonth(year, month) {
		const startDate = new Date(year, month, 1);
		const endDate = new Date(year, month + 1, 0).getDate();

		const diffWeeks = (endDate - startDate) / (1000 * 60 * 60 * 24) / 7;
		return `${Math.floor(diffWeeks)}주`;
	}

	console.log(weeksInMonth(2024, 0)); // 5주
	console.log(weeksInMonth(2024, 1)); // 4주 (윤년)
	console.log(weeksInMonth(2024, 6)); // 5주
}
{
	// 설명: 주어진 날짜에서 가장 가까운 이전 일요일의 날짜를 출력하세요.
	console.log(previousSunday("2024-10-30")); // 2024-10-27
	console.log(previousSunday("2024-10-26")); // 2024-10-20
	console.log(previousSunday("2024-10-29")); // 2024-10-27
}
{
	// 설명: 주어진 연도의 마지막 날의 날짜와 요일을 출력하세요.
	const result = lastDayOfYear(2024);
	console.log(`${2024}년 마지막 날: ${result.date} ${result.weekday}`); //2024년 마지막 날: 2024. 12. 31. 화요일
}
{
	// 설명: 두 사람의 생일이 같은 날인지 확인하는 함수를 작성하세요.
	console.log(isSameBirthday("2024-05-15", "2020-05-15")); // 같은 날입니다.
	console.log(isSameBirthday("2024-05-15", "2020-05-25")); // 다른 날입니다.
}
{
	// 설명: 주어진 연도에 대한 각 월의 평균 일수를 출력하세요.
	console.log(`${2024}년 각 월의 평균 일수: ${averageDaysInYear(2024)}`);
}
{
	// 설명: 주어진 연도의 첫 번째 월요일의 날짜를 출력하세요.
	const firstMonday = firstMondayOfYear(2024);
	console.log(firstMondayOfYear); // 2024년 첫 번째 월요일: 2024. 01. 08.
}
