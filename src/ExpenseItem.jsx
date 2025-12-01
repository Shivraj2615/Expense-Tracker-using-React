export default function ExpenseItem({ txn, deleteTxn }) {
  return (
    <li
      style={{
        color: txn.expType === "Income" ? "green" : "red",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 0",
        borderBottom: "1px solid #eee",
      }}
    >
      <h3>
        {txn.description}: &#8377;{txn.amount}
      </h3>
      <h4>{txn.date}</h4>
      <button className="delete-btn" onClick={() => deleteTxn(txn.id)}>
        Delete
      </button>
    </li>
  );
}
