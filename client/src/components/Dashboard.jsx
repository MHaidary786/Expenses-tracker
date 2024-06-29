import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/alltransactions")
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
  }, []);

  const deleteTransaction = (id) => {
    axios
      .delete("http://localhost:4000/delete/" + id)
      .then(({ data }) => {
        console.log(data);
        setTransactions((prevTransactions) =>
          prevTransactions.filter((transaction) => transaction._id !== id)
        );
      })
      .catch((error) => {
        console.error("Error deleting transaction:", error);
      });
  };

  return (
    <div className="Dashboardcontainer">
      <div className="dash-texts">
        <h1 className="logo">
          Expenses <br /> <span>Tracker</span>
        </h1>

        <h2 className="all">All Transactions</h2>
      </div>
      <TransactionsList transactions={transactions} deleteTransaction={deleteTransaction} />
    </div>
  );
}

function TransactionsList({ transactions, deleteTransaction }) {
  return (
    <div className="transactioncontainer">
      <div className="card-container">
        {transactions.map((transaction, index) => (
          <div key={index} className="card">
            <div className="card-top">
              <div>
                <span>
                  <h1>{transaction.reason}</h1>
                  <button onClick={() => deleteTransaction(transaction._id)}>Delete</button>
                </span>
              </div>
              <h3>{transaction.date}</h3>
            </div>
            <div className="card-bottom">
              <span>{transaction.type}</span>
              <h2>{transaction.amount}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
