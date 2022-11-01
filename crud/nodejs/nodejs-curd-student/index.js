const express = require('express')
const dotenv = require("dotenv");
dotenv.config();
const dbcon = require('./db/connection')
const varifytokenFile = require('./middleware/verifytoken');
const employeeRoute = require("./route/empsRoute");
const studentRoute = require("./route/stdRoute");
const auth = require("./route/auth");
global.config = require('./config/config')
const port = process.env.PORT


const app = express()
app.disable("x-powered-by");

app.use(express.json())
app.use('/auth', auth);
app.get('/', (req, res) => res.send('welcome'))

//app.use(varifytokenFile.varifytoken)
app.use('/emps', employeeRoute);
app.use('/student', studentRoute);
dbcon.then((p) => {
    console.log("connected");
    app.listen(port, () => console.log(`Listening ${port}!`))
}).catch((err) => {
    console.log("not connected");
})
