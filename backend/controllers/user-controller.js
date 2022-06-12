const models = require('../models');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {

    models.User.findOne({ where: { username: req.body.username } }).then(result => {
        if (!result) {
            return res.json("NOT-FOUND").status(404)
        } else {
            if (result.password === req.body.password) {
                const accesToken = jwt.sign({
                    username: req.body.username
                }, "Secret", {
                    expiresIn : "1d"
                })
                return res.json(accesToken).status(200)
            } else {
                return res.json("INVALID-PASSWORD").status(500)
            }
        }
    }).catch(err => {
        return res.json("ERROR").status(500)
    })
}

module.exports = {
    login
}