import React, { useState } from "react";
import Expenses from "./component/Expenses";
import NewExpense from "./component/NewExpense";
let dummy = [
  {
    id: "E1",
    title: "College Insurense",
    amount: 250,
    date: new Date(2021, 5, 12),
  },
  {
    id: "E2",
    title: "Home Insurense",
    amount: 350,
    date: new Date(2021, 4, 12),
  },
  {
    id: "E3",
    title: "School Insurense",
    amount: 650,
    date: new Date(2021, 3, 12),
  },
  {
    id: "E4",
    title: "Bike Insurense",
    amount: 550,
    date: new Date(2021, 2, 12),
  },
];
function App() {
  const [expense, setExpenses] = useState(dummy);
  const addExpenseHandler = (expenses) => {
    const updatexpense = [expenses, ...expense];
    setExpenses(updatexpense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expense} />
    </div>
  );
}
export default App;
