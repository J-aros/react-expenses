import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Sin gastos.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'CLP' }).format(expense.amount).replace("CLP", "")}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
