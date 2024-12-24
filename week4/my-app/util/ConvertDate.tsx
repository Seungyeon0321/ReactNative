export function ConvertDate(date: Date) {
  const year = date.getFullYear(); // 연도
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월 (1부터 시작하므로 +1)
  const day = String(date.getDate()).padStart(2, "0"); // 일

  return `${year}-${month}-${day}`;
}
