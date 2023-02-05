const User = require('../../model/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Register = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const _password = await bcryptjs.hash(password, 10)
        const _user = new User({
            username,
            email,
            password: _password
        })
        await _user.save()
        res.status(201).json({ message: 'register successful' })
    } catch (error) {
        console.log("🚀 ~ file: index.js:17 ~ register ~ error", error)

    }
}
const Login = async (req, res) => {
    try {
        const { email, password } = req.body
        const _user = await User.findOne({ email }).lean()
        if (_user) {
            const _password = await bcryptjs.compare(password, _user.password)
            if (_password) {
                delete _user.password
                const token = jwt.sign(_user, "qwerty")
                return res.status(200).json({ message: 'success', token })
            } else {
                return res.status(403).json({ message: "Password didn't match" })
            }
        }
        res.status(201).json({ message: 'login successful' })
    } catch (error) {
        console.log("🚀 ~ file: index.js:36 ~ Login ~ error", error)

    }
}
module.exports = { Register, Login }