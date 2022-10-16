import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(probs) {
  return (
    <div className="expenses">
      <ExpenseItem
        date={probs.items[0].date}
        title={probs.items[0].title}
        amount={probs.items[0].amount}
      />
      <ExpenseItem
        date={probs.items[1].date}
        title={probs.items[1].title}
        amount={probs.items[1].amount}
      />
      <ExpenseItem
        date={probs.items[2].date}
        title={probs.items[2].title}
        amount={probs.items[2].amount}
      />
      <ExpenseItem
        date={probs.items[3].date}
        title={probs.items[3].title}
        amount={probs.items[3].amount}
      />
    </div>
  );
}
export default Expenses;
