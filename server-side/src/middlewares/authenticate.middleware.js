const jwt = require('jsonwebtoken');
const User = require('../model/user')

const requireAuth = async (req, res, next) => {
    try {
        const _token = req.headers?.authorization;
        if (!_token) throw new Error();
        const token = _token.split("Bearer ")[1];
        const _user = jwt.decode(token, { json: true });
        const user = await User.findById(_user._id).lean()
        if (!user) throw new Error();
        req.body["user"] = user;
        next();
    } catch (e) {
        res.status(401).send({
            success: false,
            message: "UNAUTHORIZED"
        });
    }
}
module.exports = { requireAuth }