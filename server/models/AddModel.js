const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    reason: String,
    amount: Number,
    date: Date,
    type: String,
    description: String
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
