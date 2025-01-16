const ConvertDate = (date: Date) => {
  const user_date = new Date(date);

  const year = user_date.getFullYear(); // 연도
  const month = String(user_date.getMonth() + 1).padStart(2, "0"); // 월 (1부터 시작하므로 +1)
  const day = String(user_date.getDate()).padStart(2, "0"); // 일

  return `${year}-${month}-${day}`;
};

export default ConvertDate;
