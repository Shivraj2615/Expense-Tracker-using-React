import { useReducer } from "react";
import AddExpenseForm from "./AddExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";

export default function Expense() {
  let [txns, dispatch] = useReducer(transactionReducer, []);

  function transactionReducer(txns, action) {
    if (action.type === "ADD_TXN") {
      return [...txns, action.payload];
    } else if (action.type === "DELETE_TXN") {
      return txns.filter((txn) => txn.id !== action.payload);
    } else {
      throw Error("Unknown action: " + action.type);
    }
  }

  const addTxn = (txnObj) => {
    dispatch({ type: "ADD_TXN", payload: txnObj });
  };

  const deleteTxn = (id) => {
    dispatch({ type: "DELETE_TXN", payload: id });
  };

  return (
    <div className="expense-tracker">
      <h1>Expense Tracker</h1>
      <ExpenseSummary txns={txns} />
      <AddExpenseForm addTxn={addTxn} />
      <ExpenseList txns={txns} deleteTxn={deleteTxn} />
    </div>
  );
}
