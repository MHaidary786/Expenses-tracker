import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import classes from "./addTransaction.module.css"




export default function AddPage() {
  const [transactionObj, settransactionObj] = useState({
    reason: "",
    amount: 0,
    date: "",
    type: "",
    description: "",
  });

  const navigate = useNavigate()

  const addnewTransaction = async (e) => {
    e.preventDefault();
    let newTransaction = transactionObj;

    try {
      let response = await axios.post(
        "http://localhost:4000/addtransaction",
        newTransaction
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
    navigate("/dashboard")
  };

  return (
    <div className={classes.addFormContainer}>
      <div className={classes.left}>
      <div className={classes.addWrapper}>
      <h2 className="title-2 font-bold pb-4 text-xl">Add Transaction</h2>
      <form onSubmit={addnewTransaction}>
        <div className="sm:col-span-3">
          
          <div className="mt-2">
            <input
              type="text"
              className="title block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e)=> {settransactionObj({...transactionObj, reason : e.target.value})}}
              value={transactionObj.reason}
              placeholder="Salary, House Rent ...etc"
            />
          </div>
        </div>

        <div className="row">
          <div className="sm:col-span-3">
            
            <div className="mt-2">
              <input
              placeholder="Amount"
                type="number"
                className="amount block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e)=> {settransactionObj({...transactionObj, amount : e.target.value})}}
                value={transactionObj.amount}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            
            <div className="mt-2">
              <input
                type="date"
                autoComplete="given-name"
                className="title block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e)=> {settransactionObj({...transactionObj, date : e.target.value})}}
                value={transactionObj.date}
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-3">
          <div className="mt-2">
          <select
                  autoComplete="type-name"
                  className="amount block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => {
                    settransactionObj({ ...transactionObj, type: e.target.value });
                  }}
                  value={transactionObj.type}
                >
                  <option value="">Select Type</option>
                  <option value="Savings">Savings</option>
                  <option value="Expenses">Expenses</option>
                </select>
          </div>
        </div>

        <div className="col-span-full">
          <div className="mt-2">
            <textarea
            placeholder="Descriptions (optional)"
              rows={3}
              className="desc block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e)=> {settransactionObj({...transactionObj, description : e.target.value})}}
              value={transactionObj.description}
            />
          </div>
        </div>
<br />
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
      </div>
      </div>
      <div className={classes.right}></div>
      {/* <form className="form max-w-sm mx-auto w-96">
      <h1 className="font-bold pb-4 text-xl">Transactions</h1>

      </form> */}
    </div>
  );
}
