const HttpError = require("../models/httpError")
module.exports = {
    index: async (req, res, next) => {
        try {
            return res.status(200).json({ message: "Welcome to Our Homepage", status: 200 })
        } catch (err) {
            return next(new HttpError(err + "", 500))
        }
    }
}