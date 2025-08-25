// 설명: 현재 날짜와 시간을 YYYY-MM-DD HH:mm:ss 형식으로 출력하세요.
const now = new Date();
const year = now.getFullYear();
const month = (now.getMonth() + 1).toString().padStart(2, 0);
const date = now.getDate().toString().padStart(2, 0);
const hours = now.getHours().toString().padStart(2, 0);
const minutes = now.getMinutes().toString().padStart(2, 0);
const seconds = now.getSeconds().toString().padStart(2, 0);

console.log(`${year}. ${month}. ${date}. ${hours}:${minutes}:${seconds}`);

// 설명: 2025년 12월 25일이 무슨 요일인지 출력하세요.
const options = {
	weekday: "long",
};
const xmas = new Date("2025-12-25").toLocaleDateString("ko-KR", options);
console.log(xmas);

// 설명: 2025년 10월의 마지막 날짜를 구하세요.
const lastDayOfMonth = new Date(2025, 10, 0).getDate();
console.log(lastDayOfMonth);

// 설명: 2025년 1월 1일과 2025년 12월 31일 사이의 일수를 계산하세요.
{
	const startDate = new Date("2025-01-01");
	const endDate = new Date("2025-12-31");
	const diffTime = endDate - startDate;
	const diffDays = diffTime / (1000 * 60 * 60 * 24);
	console.log(diffDays);
}

// 설명: 1990년 5월 15일 생일을 기준으로 현재 나이를 계산하세요.
{
	const year = now.getFullYear();
	const month = now.getMonth();
	const date = now.getDate();
	const birthDay = new Date("1990-05-15");
	const birthYear = birthDay.getFullYear();
	const birthMonth = birthDay.getMonth();
	const birthDate = birthDay.getDate();

	let age = year - birthYear;
	console.log(month);
	console.log(date);
	console.log(birthMonth);
	console.log(birthDate);

	if (month < birthMonth || (month === birthMonth && date < birthDate)) {
		age--;
	}

	console.log(age);
}

// 설명: 현재 날짜에 10일을 추가한 날짜를 출력하세요.
const addDate = new Date(now.setDate(now.getDate() + 10));
const addYear = addDate.getFullYear();
const addMonth = addDate.getMonth() + 1;
const addDay = addDate.getDate();
console.log(`${addYear}. ${addMonth}. ${addDay}`);

// 설명: 2025년 10월 30일의 월과 연도를 출력하세요.
const date251030 = new Date(2025, 9, 30);
const year251030 = date251030.getFullYear();
const month251030 = date251030.getMonth() + 1;
console.log(`${year251030}, ${month251030}`);

// 설명: 오늘 날짜의 시작 시간 (00:00:00)으로 설정한 Date 객체를 출력하세요.
const now0 = new Date();
const hour0 = now0.setHours(0);
const minute0 = now0.setMinutes(0);
const second0 = now0.setSeconds(0);
const getH = now0.getHours().toString().padStart(2, 0);
const getM = now0.getMinutes().toString().padStart(2, 0);
const getS = now0.getSeconds().toString().padStart(2, 0);

console.log(`${year}-${month}-${date} ${getH}:${getM}:${getS}`);

// 설명: 2024년 10월의 모든 날짜와 해당 요일을 출력하세요.
{
	const startDate = new Date(2024, 9, 1);
	const startYear = startDate.getFullYear();
	const startMonth = (startDate.getMonth() + 1).toString().padStart(2, 0);
	const endDate = new Date(2024, 10, 1);
	const diffTime = endDate - startDate;
	const diffDays = diffTime / (1000 * 60 * 60 * 24);
	for (let i = 1; i <= diffDays; i++) {
		startDate.setDate(i);
		const startDay = i.toString().padStart(2, 0);
		const day = startDate.getDay();
		let dayKo = "";
		if (day === 0) dayKo = "일요일";
		else if (day === 1) dayKo = "월요일";
		else if (day === 2) dayKo = "화요일";
		else if (day === 3) dayKo = "수요일";
		else if (day === 4) dayKo = "목요일";
		else if (day === 5) dayKo = "금요일";
		else if (day === 6) dayKo = "토요일";
		console.log(`${startYear}-${startMonth}-${startDay}: ${dayKo}`);
	}
}

// 설명: 주어진 연도가 윤년인지 확인하는 함수를 작성하세요. (윤년은 4로 나누어 떨어지고, 100으로 나누어 떨어지지 않거나 400으로 나누어 떨어져야 합니다.)
function isYoon(year) {
	if ((year % 4 === 0 && year % 100 > 0) || year % 400 === 0) {
		console.log(`${year}: 윤년`);
	} else {
		console.log(`${year}: 평년`);
	}
}
isYoon(2024);
isYoon(2023);
