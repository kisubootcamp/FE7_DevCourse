{
  // 1
  // 2025. 04. 19. 02:36:34
  const now = new Date();

  const year = now.getFullYear(); // 2025
  const month = String(now.getMonth() + 1).padStart(2, "0"); // 7
  const date = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");

  console.log(`${year}. ${month}. ${date} ${hours}:${minute}:${second}`);
  // console.log(now.toISOString().slice(0, 19).replace("T", " "));
}
{
  // 2
  const day = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  const now = new Date(2025, 11, 25);
  console.log(now.toLocaleDateString("ko-KR", { weekday: "long" }));
  console.log(day[now.getDay()]); // 0 1 2 3 4
}
{
  // 3
  const lastDate = new Date(2025, 10, 0).getDate(); // 2025-11-0?
  console.log(lastDate);
}
{
  // 4
  //설명: 2025년 1월 1일과 2025년 12월 31일 사이의 일수를 계산하세요.
  const startDate = new Date(2025, 0, 1);
  const endDate = new Date(2026, 0, 0);
  const diffDasy = (endDate - startDate) / (1000 * 60 * 60 * 24);
}
{
  // 5
  // 설명: 1990년 5월 15일 생일을 기준으로 현재 나이를 계산하세요.
  const birthday = new Date(1990, 4, 15);
  const today = new Date();
  let age = today.getFullYear() - birthday.getFullYear();
  if (
    today <
    new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate())
  ) {
    age--;
  }
  console.log(age);
}
{
  // 6
  // 오늘이 2025-10-31이라면 출력 결과는
  // 2025. 11. 10.
  const now = new Date();
  now.setDate(now.getDate() + 10);
  console.log(
    `${now.getFullYear()}. ${String(now.getMonth() + 1).padStart(
      2,
      "0"
    )}. ${String(now.getDate()).padStart(2, "0")}.`
  );
}
{
  // 7
  // 2025, 10
  const now = new Date(2025, 9, 30);
  console.log(now.getFullYear(), now.getMonth() + 1);
}
{
  // 8
  // 2025-10-30 00:00:00
  const now = new Date();

  const year = now.getFullYear(); // 2025
  const month = String(now.getMonth() + 1).padStart(2, "0"); // 7
  const date = String(now.getDate()).padStart(2, "0");

  console.log(`${year}. ${month}. ${date} 00:00:00`);
}
{
  // 9
  const lastDate = new Date(2025, 10, 0).getDate(); //
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
  for (let d = 1; d <= lastDate; d++) {
    const date = new Date(2025, 9, d); // 시간 인스턴스 객체
    const weekday = day[date.getDay()]; // 요일
    console.log(
      `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(
        date.getDate()
      )} ${weekday}`
    );
  }
}
{
  // 10
  //주어진 연도가 윤년인지 확인하는 함수를 작성하세요. (윤년은 4로 나누어 떨어지고, 100으로 나누어 떨어지지 않거나 400으로 나누어 떨어져야 합니다.)
  const isLeapYear = (year) =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  [2024, 2025].forEach((year) =>
    console.log(`${year}: ${isLeapYear(year) ? "윤년" : "평년"}`)
  );
}
