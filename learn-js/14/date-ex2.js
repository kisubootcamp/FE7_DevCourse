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
		const weekday = startDate.getDay();
		const endDate = new Date(year, month + 1, 0).getDate();
		const weeks =
			Math.ceil((endDate - startDate.getDate() - (7 - weekday)) / 7) + 1; // 가끔 1일이 토요일에 있는데 그렇게 치면 1주 치기가 어려움. 요일 구해서 7 빼기
		return weeks;
	}

	console.log(weeksInMonth(2024, 0)); // 5주
	console.log(weeksInMonth(2024, 1)); // 5주 (윤년) <- 확인해보니 5주임!!
	console.log(weeksInMonth(2024, 6)); // 5주
}
{
	function previousSunday(dateStr) {
		const [year, month, date] = dateStr.split("-");
		const thatDate = new Date(dateStr);
		const getDay = thatDate.getDay();
		const previousSunday = new Date(year, month - 1, date - getDay);
		return previousSunday //
			.toLocaleString("ko-KR")
			.split(". ")
			.reduce((acc, cur, i) => {
				if (i < 2) acc = acc + cur + "-";
				else if (i === 2) acc += cur;
				return acc;
			}, "");
	}

	// 설명: 주어진 날짜에서 가장 가까운 이전 일요일의 날짜를 출력하세요.
	console.log(previousSunday("2024-10-30")); // 2024-10-27
	console.log(previousSunday("2024-10-26")); // 2024-10-20
	console.log(previousSunday("2024-10-29")); // 2024-10-27
}
{
	// 설명: 주어진 연도의 마지막 날의 날짜와 요일을 출력하세요.
	function lastDayOfYear(year) {
		const thatDate = new Date(year + 1, 0, 0);
		const day = [
			"일요일",
			"월요일",
			"화요일",
			"수요일",
			"목요일",
			"금요일",
			"토요일",
		];
		return {
			year: year,
			month: thatDate.getMonth() + 1,
			date: thatDate.getDate(),
			weekday: day[thatDate.getDay()],
		};
	}

	const result = lastDayOfYear(2024);
	console.log(
		`${2024}년 마지막 날: ${result.year}. ${result.month}. ${result.date}. ${
			result.weekday
		}`,
	); //2024년 마지막 날: 2024. 12. 31. 화요일
}
{
	// 설명: 두 사람의 생일이 같은 날인지 확인하는 함수를 작성하세요.
	function isSameBirthday(a, b) {
		const today = new Date();
		const aBirth = new Date(a);
		const bBirth = new Date(b);
		aBirth.setFullYear(today.getFullYear());
		bBirth.setFullYear(today.getFullYear());

		return String(aBirth) === String(bBirth)
			? "같은 날입니다"
			: "다른 날입니다";
	}
	console.log(isSameBirthday("2024-05-15", "2020-05-15")); // 같은 날입니다.
	console.log(isSameBirthday("2024-05-15", "2020-05-25")); // 다른 날입니다.
}
{
	// 설명: 주어진 연도에 대한 각 월의 평균 일수를 출력하세요.
	function averageDaysInYear(year) {
		let result = [];
		for (let i = 0; i < 12; i++) {
			const thatDate = new Date(year, i + 1, 0);
			result.push(thatDate.getDate());
		}
		return result;
	}

	console.log(`${2024}년 각 월의 평균 일수: ${averageDaysInYear(2024)}`);
}
{
	// 설명: 주어진 연도의 첫 번째 월요일의 날짜를 출력하세요.
	function firstMondayOfYear(year) {
		const thatDate = new Date(year, 0, 1);
		const day = thatDate.getDay();

		if (day === 1) {
			return new Date(year, 0, 1).toLocaleString("ko-KR").slice(0, 13);
		} else {
			new Date(year, 0, 1 + (7 - day + 1)).toLocaleString("ko-KR").slice(0, 13);
		}
	}

	const firstMonday = firstMondayOfYear(2024);
	console.log(firstMonday); // 2024년 첫 번째 월요일: 2024. 01. 08.
}
