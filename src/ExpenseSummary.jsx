import { useContext, useMemo } from "react";
import { TransactionContext } from "./TransactionContext";

export default function ExpenseSummary() {
  const { txns } = useContext(TransactionContext);

  const totalIncome = useMemo(() => {
    return txns.reduce(
      (sum, txn) => (txn.expType === "Income" ? sum + txn.amount : sum),
      0
    );
  }, [txns]);

  const totalExpense = useMemo(() => {
    return txns.reduce(
      (sum, txn) => (txn.expType === "Expense" ? sum + txn.amount : sum),
      0
    );
  }, [txns]);

  const balance = totalIncome - totalExpense;

  return (
    <div className="expense-summary">
      <p>Balance: &#8377;{balance}</p>
      <p style={{ color: "green" }}>Income: &#8377;{totalIncome}</p>
      <p style={{ color: "red" }}>Expense: &#8377;{totalExpense}</p>
    </div>
  );
}
