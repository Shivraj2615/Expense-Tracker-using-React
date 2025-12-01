import { useCallback, useReducer } from "react";
import AddExpenseForm from "./AddExpenseForm";
import ExpenseList from "./ExpenseList";
import ExpenseSummary from "./ExpenseSummary";
import { TransactionContext } from "./TransactionContext";

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

  const addTxn = useCallback((txnObj) => {
    dispatch({ type: "ADD_TXN", payload: txnObj });
  }, [dispatch]);

  const deleteTxn = useCallback((id) => {
    dispatch({ type: "DELETE_TXN", payload: id });
  }, [dispatch]);

  return (
    <div className="expense-tracker">
      <TransactionContext.Provider value={{ txns, addTxn, deleteTxn }}>
        <h1>Expense Tracker</h1>
        <ExpenseSummary />
        <AddExpenseForm />
        <ExpenseList />
      </TransactionContext.Provider>
    </div>
  );
}
