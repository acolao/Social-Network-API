const mongoose = require("mongoose");

const dbName = 'socialnetworkDB';

mongoose.connect(`mongodb://127.0.0.1:27017`);


module.exports = mongoose.connection;