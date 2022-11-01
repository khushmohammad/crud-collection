const empsData = require("../db/empsData")
const empModal = require('../schema/empSchema')
exports.index = (req, res) => {
    empModal.find().then((p) => {
        console.log(p);
        res.json(p)
        res.end();
    })
}

exports.empsById = (req, res) => {
    empModal.find({ empID: req.params.empID }, (err, doc) => {
        if (err) {
            console.log("error found");
            res.json("error found");
            res.end()
        } else {
            console.log(doc);
            if (doc !== "") {
                res.json(doc);
                res.end()
            } else {
                console.log("record not found");
                res.json("not found");
                res.end()
            }

        }
    });
}
exports.empCreate = (req, res) => {
    const empData = req.body
    const newInsert = new empModal(empData)
    newInsert.save().then(() => {
        console.log("success");
        res.json("success");
        res.end()
    }).catch((err) => {
        console.log("error email", err.errors.email.message);
        res.json("edsdsrror found");
        res.end()
    })

}
exports.empDelete = (req, res) => {
    empModal.deleteOne({ empId: req.params.empId }, (err, data) => {
        if (err) {
            console.log("err found");
            res.json("error found");
            res.end()
        }
        else {
            console.log("deleted");
            res.json("deleted");
            res.end()
        }
    })
}




