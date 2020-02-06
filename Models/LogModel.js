const mongoose = require('mongoose');

const Log = new mongoose.Schema({
    nome: String,
    pass: String
});

module.exports = mongoose.model('users', Log);
