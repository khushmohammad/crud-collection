const jwt = require('jsonwebtoken');
exports.index = (req, res) => {
    let tokan = jwt.sign(req.body, global.config.secretKey, { expiresIn: "3d" })
    console.log(tokan);
    const userInfo = {
        username: req.body.username,
        password: req.body.password
    }
    if (userInfo.username === "username" && userInfo.password === "password") {
        res.status(200).json({
            message: "login successfull",
            jwttoken: tokan
        })
    }
    else {

        res.status(401).send("wrong username and password");
    }
}
