// 문제 4: 특정 월의 주 수
function weeksInMonth(year, month) {
  const dayStart = new Date(year, month, 1);
  const dayEnd = new Date(year, month + 1, 1);
  const diff = Math.floor((dayEnd - dayStart) / (7 * 24 * 60 * 60 * 1000));
  return diff + "주";
}
console.log(weeksInMonth(2024, 0)); // 5주
console.log(weeksInMonth(2024, 1)); // 4주 (윤년)
console.log(weeksInMonth(2024, 6)); // 5주
