// home, login, singUp, addTransaction
const User = require("../models/UserModel");
const Transaction = require("../models/AddModel");

const home = (req, res) => {
  res.send("WELCOME");
};

const users = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);

    const userData = {
      username,
      password,
    };

    const newUser = await User.create(userData);
    console.log("Saved user:", newUser);

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
  }
};

const usernames = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
  }
};

const singUp = (req, res) => {};

const addTransaction = async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const { reason, amount, date, type, description } = req.body;

    console.log("Parsed data:", { reason, amount, date, type, description });

    if (!reason || !amount || !date || !type || !description) {
      console.error("Validation error: Missing fields");
      return res.status(400).json({ error: "All fields are required" });
    }

    const transactionData = {
      reason,
      amount,
      date,
      type,
      description,
    };

    console.log("Transaction data to save:", transactionData);

    const newTransaction = await Transaction.create(transactionData);
    console.log("Saved transaction:", newTransaction);

    res.status(201).json(newTransaction);
  } catch (error) {
    console.error("Error saving transaction:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the transaction" });
  }
};

const allTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.status(200).send(transactions);
  } catch (error) {
    console.log(error);
  }
};

const deleteTransaction = async (req, res) => {
    try {
        const transactionID = req.params._id
        await Transaction.deleteOne({ _id : transactionID })
        res.send(transactionID)
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
  home,
  users,
  singUp,
  addTransaction,
  usernames,
  allTransactions,
  deleteTransaction,
};
