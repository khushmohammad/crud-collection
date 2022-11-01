const mongoose = require("mongoose");


const emp = new mongoose.Schema({
    empId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true, 'User email required']
    },
    address: {
        type: String,
        required: [true, 'User address required']
    }
})

const empModal = new mongoose.model("employees", emp)

module.exports = empModal