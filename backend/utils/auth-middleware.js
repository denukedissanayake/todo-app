const jwt = require('jsonwebtoken');

const VerifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization
    const token = authHeader.toString().split(" ")[1]

    if (!token) {
        return res.json("NOT-AUTHORIZED").status(404);
    }

    if (token) {
        jwt.verify(token, "Secret", (error ,user) => {
            if (error) {
                return res.json("INVALID-TOKEN").status(403);
            }
           req.user = user
            next()
        } )
    }
}

module.exports = {
    VerifyToken
}