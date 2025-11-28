export default function ExpenseItem({ txn, deleteTxn }) {
  return (
    <li key={txn.id} style={{ color: txn.expType === "Income" ? "green" : "red"}}>
      <h3>{txn.description}: &#8377;{txn.amount} </h3>
      <h4>{txn.date}</h4>
      <button className="delete-btn" onClick={() => deleteTxn(txn.id)}>Delete</button>
    </li>
  );
}
