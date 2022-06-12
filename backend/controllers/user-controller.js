const jwt = require('jsonwebtoken');

const login = async (req, res) => {

    const existingUser = {email : "test@gmail.com"}

    const accesToken = jwt.sign({
        email: existingUser.email,
    }, "SecretKey", {
        expiresIn : "1d"
    })

    res.json(accesToken).status(200)
}

module.exports = {
    login
}