import React, { useState } from "react";
import axios from "axios";

export default function AddPage() {
  const [added, setAdded] = useState({
    reason: "",
    amount: 0,
    date: "",
    type: "",
    description: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setAdded((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const addnewTransaction = async (e) => {
    e.preventDefault();
    let newTransaction = added;

    try {
      let response = await axios.post(
        "http://localhost:4000/addtransaction",
        newTransaction
      );
      console.log(response);
      console.log(newTransaction);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="title-1">Expenses Tracker</h1>
      <h2 className="title-2">Add Transaction</h2>
      <form onSubmit={addnewTransaction}>
        <div className="sm:col-span-3">
          <label
            htmlFor="reason"
            className="block text-6x font-medium leading-6 text-gray-900"
          >
            What for?
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="reason"
              id="reason"
              className="title block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              value={added.reason}
            />
          </div>
        </div>

        <div className="row">
          <div className="sm:col-span-3">
            <label
              htmlFor="amount"
              className="block text-6x font-medium leading-6 text-gray-900"
            >
              Amount
            </label>
            <div className="mt-2">
              <input
                type="number"
                name="amount"
                id="amount"
                className="amount block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleInputChange}
                value={added.amount}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="date"
              className="block text-6x font-medium leading-6 text-gray-900"
            >
              Date
            </label>
            <div className="mt-2">
              <input
                type="date"
                name="date"
                id="date"
                autoComplete="given-name"
                className="title block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={handleInputChange}
                value={added.date}
              />
            </div>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label
            htmlFor="type"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Type
          </label>
          <div className="mt-2">
            <select
              id="type"
              name="type"
              autoComplete="type-name"
              className="select block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              value={added.type}
            >
              <option value="">Select type</option>
              <option value="Savings">Savings</option>
              <option value="Expenses">Expenses</option>
            </select>
          </div>
        </div>

        <div className="col-span-full">
          <label
            htmlFor="description"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Descriptions (optional)
          </label>
          <div className="mt-2">
            <textarea
              id="description"
              name="description"
              rows={3}
              className="desc block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={handleInputChange}
              value={added.description}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}