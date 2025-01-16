import axios from "axios";

const API_URL = "https://react-project-a3fb8-default-rtdb.firebaseio.com/";

const DeleteExpense = async (expenseId: string) => {
  try {
    await axios.delete(`${API_URL}/expenses/${expenseId}.json`);
  } catch (error) {
    console.error("Error deleting expense:", error);
  }
};

const GetExpenses = async () => {
  try {
    const response = await axios.get(`${API_URL}/expenses.json`);
    let expenses = [];

    for (const key in response.data) {
      let expense = {
        id: key,
        ...response.data[key],
      };
      expenses.push(expense);
    }

    return expenses;
  } catch (error) {
    console.error("Error fetching expenses:", error);
    return []; // 에러 발생 시 빈 배열 반환
  }
};

export { DeleteExpense, GetExpenses };
