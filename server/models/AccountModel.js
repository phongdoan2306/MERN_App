const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    username: String,
    password: String,
    phone: String,
    role: Number
});

module.exports = AccountModel = mongoose.model('Account', AccountSchema);