const mongoose = require('mongoose');
var url = process.env.DB_CONNECTION;

const dbconnection = mongoose.connect(url, {
    useNewUrlParser: true
});
module.exports = dbconnection