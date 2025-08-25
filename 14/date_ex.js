{
  // 1.
  const now = new Date();
  console.log(now.toISOString().slice(0, 19).replace("T", " "));

  const year = now.getFullYear(); // 2025
  const month = now.getMonth() + 1;
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const second = String(now.getSeconds()).padStart(2, "0");

  console.log(`${year}. ${month}. ${day} ${hours}:${minute}:${second}`);
}
{
  // 2.
  const days = [
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

  console.log(days[now.getDay()]);
}
{
  // 3.
  const lastDate = new Date(2025, 10, 0).getDate();
  console.log(lastDate);
}
{
  // 4.
  const startDate = new Date(2025, 0, 1);
  const endDate = new Date(2025, 11, 31);
  const dateDiff = endDate - startDate;
  const diffDays = dateDiff / (1000 * 60 * 60 * 24);
  console.log(diffDays);
}
{
  // 5.
  const today = new Date();
  const birthday = new Date(1990, 4, 15);
  const age = today.getFullYear() - birthday.getFullYear();
  if (
    today <
    new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate())
  ) {
    age--;
  }
  console.log(age);
}
{
  // 6.
  const now = new Date();
  now.setDate(now.getDate() + 10);
  console.log(
    `${now.getFullYear()}. ${String(now.getMonth() + 1).padStart(
      2,
      "0"
    )}. ${String(now.getDate()).padStart(2, "0")}`
  );
}
{
  // 7
  // 2025, 10
  const now = new Date(2025, 9, 30);
  console.log(now.getFullYear(), now.getMonth() + 1);
}
{
  // 8.
  const today = new Date();
  const startToZeroTime = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  console.log(startToZeroTime);
}
{
  // 9.
  const lastDate = new Date(2025, 10, 0).getDate();
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
  console.log(lastDate);
}
{
  // 10.

  const isLeapYear = (year) =>
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  [2024, 2025].forEach((year) =>
    console.log(`${year}: ${isLeapYear(year) ? "윤년" : "평년"}`)
  );
}
