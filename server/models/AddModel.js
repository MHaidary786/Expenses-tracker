const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    
    reason: String,
    amount: Number,
    date: Date,
    type: String,
    description: String,
    userID : {type: mongoose.Schema.Types.ObjectId, ref: "user"}
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
