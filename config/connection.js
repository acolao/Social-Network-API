const mongoose = require("mongoose");

const dbName = 'socialnetworkDB';

mongoose.connect('mongodb://localhost:27017')

module.exports = mongoose.connection;