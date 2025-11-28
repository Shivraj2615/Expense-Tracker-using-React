import { useState } from "react";
import AddExpenseForm from "./AddExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";

export default function Expense() {
  let [txns, setTxns] = useState([]);

  const addTxn = (txnObj) => {
    setTxns([...txns, txnObj]);
  };

  const deleteTxn = (id) => {
    let newTxns = txns.filter((txn) => txn.id !== id);
    setTxns(newTxns);
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
