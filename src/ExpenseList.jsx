import { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import { TransactionContext } from "./TransactionContext";

export default function ExpenseList() {
  const { txns, deleteTxn } = useContext(TransactionContext);
  return (
    <div className="expense-list">
      <h3>Transaction History</h3>
      <div>
        <ul>
          {txns.map((txn) => (
            <ExpenseItem
              key={txn.id}
              txn={txn}
              deleteTxn={deleteTxn}
              className="expense-item"
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
