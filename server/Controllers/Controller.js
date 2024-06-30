// home, login, singUp, addTransaction
const User = require("../models/UserModel");
const Transaction = require("../models/AddModel");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose")

const blogModel = mongoose.model("blog", { title : String, text : String})

const home = (req, res) => {
  res.send("WELCOME");
};

const singup = async (req, res) => {
  try {
    const user = await User.findOne({username : req.body.username});
    
    if (user) { 
        res.send("Username Already Exist, please choose a different username")
    } 
    else {
        bcrypt.hash(req.body.password, 10, async function(err, hash) {
            // Store hash in your password DB.
            const newUser = { name : req.body.name , lastname : req.body.lastname , username : req.body.username, password : hash }
            await User.create(newUser)
            res.status(201).json(newUser);
        });
    }
    
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
    const user = await User.findOne({username : req.body.username});
    if (user) {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if(result){
                const token = jwt.sign({_id : user._id} , "secret", {expiresIn : "3h"})
                res.status(200).json({token : token})
            } else {
                res.status(401).send({msg : "Wrong Password"})
            }
        })
    } else {
        res.status(401).send({msg : "Wrong Username"})
    }
}

const deleteUser = async (req, res) => {
    const id = req.params.id
    await User.deleteOne({ _id : id})
    res.send({msg : "Delete done"})
}

const usernames = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
  }
};

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





const createblog = async (req, res) => {
    try {
        const blog = await blogModel.create(req.body)
        res.send(blog)
    } catch (error) {
        console.log(error)
    }
}

const blogs = async (req, res) => {
    try {
        const blogs = await blogModel.find()
        res.send(blogs)
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
  home,
  singup,
  login,
  addTransaction,
  usernames,
  deleteUser,
  allTransactions,
  deleteTransaction,
  createblog,
  blogs,
};
