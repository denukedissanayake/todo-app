const models = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = async (req, res) => {

    try {
        const result = await models.User.findOne({ where: { username: req.body.username } })
        if (!result) {
            return res.json("NOT-FOUND").status(404)
        } else {
            const isPasswordCorrect = await bcrypt.compare(req.body.password, result.password);

            if (isPasswordCorrect) {
                const accesToken = jwt.sign({
                    username: req.body.username
                }, process.env.JWT_SECRET, {
                    expiresIn: "1d"
                })
                return res.json(accesToken).status(200)
            } else {
                return res.json("INVALID-PASSWORD").status(500)
            }
        }
    } catch(err) {
        return res.json("ERROR").status(500)
    }
}

const signup = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = {
        username: req.body.username,
        password: hashedPassword,
    }

    models.User.create(user).then(result => {
        res.json("CREATED").status(201)
    }).catch(err => {
        res.json("ERROR").status(500)
    })
}

module.exports = {
    login,
    signup
}