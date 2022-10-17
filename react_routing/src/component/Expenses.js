import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(probs) {
  return (
    <div className="expenses">
      {probs.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </div>
  );
}
export default Expenses;
