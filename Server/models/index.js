const mongoose = require('mongoose');
const client = mongoose.connect("mongodb+srv://afia:1234@cluster0.r0trdgv.mongodb.net/?retryWrites=true&w=majority")


module.exports = client;    