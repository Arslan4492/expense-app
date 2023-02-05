const { AuthServices } = require("../../services")

module.exports = (req, res) => {
    return AuthServices.Login(req, res)
}