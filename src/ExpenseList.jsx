import ExpenseItem from "./ExpenseItem";

export default function ExpenseList({ txns, deleteTxn }) {
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
