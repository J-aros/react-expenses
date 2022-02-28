import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Comida",
    amount: 94500,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Gastos Comunes",
    amount: 100000,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Materiales de construcción",
    amount: 50000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Computador",
    amount: 400000,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </>
  );
}

export default App;
