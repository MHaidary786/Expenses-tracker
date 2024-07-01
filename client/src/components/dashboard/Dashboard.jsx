import React, { useState, useEffect } from "react";
import classes from "./dashboard.module.css";
import axios from "axios";

export default function Dashboard() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get("https://expenses-tracker-mps2.onrender.com/alltransactions")
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((error) => {
        console.error("Error fetching transactions:", error);
      });
  }, []);

  const deleteTransaction = (id) => {
    axios
      .delete("https://expenses-tracker-mps2.onrender.com/delete/" + id)
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
    <div className={classes.Dashboardcontainer}>
      <div className={classes.header}>
          <p className={classes.text}>
            Mahdi! You have 100$ left in your account.
          </p>
      </div>
      <div className="transactions">
      <TransactionsList transactions={transactions} deleteTransaction={deleteTransaction} />
      </div>
    </div>
  );
}

function TransactionsList({ transactions, deleteTransaction }) {
  return (
    <div>
      <div className={classes.transactionContainer}>
      <h2 className={classes.headline}>All Transactions</h2>
      <div className={classes.cardContainer}>
        {transactions.map((transaction, index) => (
          <div key={index} className={classes.card}>
            <div className={classes.cardTop}>
              <div>
                <h1>{transaction.reason}</h1>
                <button onClick={() => deleteTransaction(transaction._id)}>Delete</button>
              </div>
              <h3>{transaction.date.split('T')[0]}</h3>
            </div>
            <div className={classes.cardBottom}>
              <span>{transaction.type}</span>
              <h2>{transaction.amount}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}
