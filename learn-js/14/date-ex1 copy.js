{
	// 설명: 현재 날짜와 시간을 YYYY-MM-DD HH:mm:ss 형식으로 출력하세요.
	const now = new Date();
	// utc 내용이 없고 yyyy-mm-dd hh:mm:ss 출력이라고만 할땐 이렇게
	// console.log(now.toISOString().slice(0,19).replace("T", " "));

	const year = now.getFullYear();
	const month = String(now.getMonth() + 1).padStart(2, "0");
	const date = String(now.getDate()).padStart(2, "0");
	const hours = String(now.getHours()).padStart(2, "0");
	const minutes = String(now.getMinutes()).padStart(2, "0");
	const seconds = String(now.getSeconds()).padStart(2, "0");

	console.log(`${year}. ${month}. ${date}. ${hours}:${minutes}:${seconds}`);
}

{
	// 설명: 2025년 12월 25일이 무슨 요일인지 출력하세요.
	const day = [
		"일요일",
		"월요일",
		"화요일",
		"수요일",
		"목요일",
		"금요일",
		"토요일",
	];
	const xmas = new Date("2025-12-25");
	console.log(day[xmas.getDay()]);

	// 혹은??? toLocaleDateString
	console.log(xmas.toLocaleDateString("ko-KR", { weekday: "long" }));
}

{
	// 설명: 2025년 10월의 마지막 날짜를 구하세요.
	const lastDayOfMonth = new Date(2025, 10, 0).getDate(); // 2025-11-0
	console.log(lastDayOfMonth);
}

{
	// 설명: 2025년 1월 1일과 2025년 12월 31일 사이의 일수를 계산하세요.
	const startDate = new Date(2025, 0, 1);
	const endDate = new Date(2026, 0, 0);
	const diffDays = (endDate - startDate) / (1000 * 60 * 60 * 24);
	console.log(diffDays);
}

// 설명: 1990년 5월 15일 생일을 기준으로 현재 나이를 계산하세요.
{
	const birthDay = new Date(1990, 4, 15);
	const today = new Date();

	let age = today.getFullYear() - birthDay.getFullYear();

	if (
		today <
		new Date(today.getFullYear(), birthDay.getMonth(), birthDay.getDate())
	) {
		age--;
	}

	console.log(age);
}

{
	// 설명: 현재 날짜에 10일을 추가한 날짜를 출력하세요.
	const now = new Date();
	now.setDate(now.getDate() + 10);
	console.log(
		`${now.getFullYear()}. ${String(now.getMonth() + 1).padStart(
			2,
			"0",
		)}. ${String(now.getDate()).padStart(2, "0")}`,
	);
}

{
	// 설명: 2025년 10월 30일의 월과 연도를 출력하세요.
	const now = new Date(2025, 9, 30);
	console.log(`${now.getFullYear()}, ${now.getMonth() + 1}`);
}

{
	// 설명: 오늘 날짜의 시작 시간 (00:00:00)으로 설정한 Date 객체를 출력하세요.
	const now0 = new Date();

	now0.setHours(0);
	now0.setMinutes(0);
	now0.setSeconds(0);

	const getH = now0.getHours().toString().padStart(2, "0");
	const getM = now0.getMinutes().toString().padStart(2, "0");
	const getS = now0.getSeconds().toString().padStart(2, "0");

	console.log(`${year}-${month}-${date} ${getH}:${getM}:${getS}`);
}

{
	// 설명: 2025년 10월의 모든 날짜와 해당 요일을 출력하세요.
	const endDate = new Date(2025, 10, 0).getDate();
	const day = [
		"일요일",
		"월요일",
		"화요일",
		"수요일",
		"목요일",
		"금요일",
		"토요일",
	];

	const pad = (n) => String(n).padStart(2, "0");
	for (let d = 1; d <= endDate; d++) {
		const date = new Date(2025, 9, d);
		const weekday = day[date.getDay()];
		console.log(
			`${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
				date.getDate(),
			)}: ${weekday}`,
		);
	}
}

// 설명: 주어진 연도가 윤년인지 확인하는 함수를 작성하세요. (윤년은 4로 나누어 떨어지고, 100으로 나누어 떨어지지 않거나 400으로 나누어 떨어져야 합니다.)
function isLeapYear(year) {
	return (year % 4 === 0 && year % 100 > 0) || year % 400 === 0;
}
[2024, 2025].forEach((year) => {
	console.log(`${year}: ${isLeapYear(year) ? "윤년" : "평년"}`);
});
