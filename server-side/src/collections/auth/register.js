const { AuthServices } = require("../../services")

module.exports = (req, res) => {
    return AuthServices.Register(req, res)
}