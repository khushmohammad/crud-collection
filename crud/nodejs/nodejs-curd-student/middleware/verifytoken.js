const express = require('express')
const jwt = require('jsonwebtoken');

exports.varifytoken = ((req, res, next) => {

    let token = req.headers['token'];
    console.log(token);
    jwt.verify(token, global.config.secretKey, { algorithms: global.config.algorithm }, (err, decoded) => {
        if (err) {
            return res.status(401).json({ "message": "unauthorized" })
        }
        req.decoded = decoded;
        console.log(decoded);
        next()
    })
})
