import { useContext, useEffect, useRef, useState } from "react";
import { TransactionContext } from "./TransactionContext";

export default function AddExpenseForm() {
  let { addTxn } = useContext(TransactionContext);

  let [description, setDescription] = useState("");
  let [amount, setAmount] = useState("");
  let [expType, setExpType] = useState("Income");
  let [date, setDate] = useState("");

  let desInputRef = useRef(null);
  useEffect(() => {
    desInputRef.current.focus();
  }, []);

  const handleAddTxn = () => {
    if (description.trim() === "") {
      alert("Enter Transaction Description");
      return;
    } else if (amount <= 0) {
      alert("Enter a valid Amount");
      return;
    } else if (date === "") {
      alert("Select Valid Date");
      return;
    }
    let txnObj = {
      id: Date.now(),
      description: description,
      amount: Number(amount),
      expType: expType,
      date: date,
    };
    addTxn(txnObj);

    desInputRef.current.focus();

    setDescription("");
    setAmount("");
    setDate("");
    setExpType("Income");
  };

  return (
    <div className="expense-form">
      <input
        type="text"
        placeholder="Enter Transaction Detail"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        ref={desInputRef}
      />
      <input
        type="number"
        min={0}
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
        }}
      />
      <select
        name="expType"
        value={expType}
        onChange={(e) => setExpType(e.target.value)}
      >
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>
      <button className="add-btn" onClick={handleAddTxn}>
        Add Transaction
      </button>
    </div>
  );
}
