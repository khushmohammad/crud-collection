const stdData = require("../db/stdData")


exports.index = (req, res) => {
    res.json(stdData)
    res.end()
}

exports.stdById = (req, res) => {
    const stdOne = stdData.find(emp => emp.ID == req.params.empID);
    res.send(stdOne);
    res.end()
}

exports.stdGetFees = (req, res) => {
    const stdDataOne = stdData.find(std => std.ID == req.params.id)
    res.send(stdDataOne.Fees);
    res.end()
}

exports.stdGetResult = (req, res) => {
    const stdDataaOne = stdData.find(std => std.ID == req.params.id)
    res.send(stdDataaOne.Result);
    res.end()
}



