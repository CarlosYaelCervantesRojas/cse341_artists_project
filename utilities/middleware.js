const { statusCodes, CustomError } = require("./index");

function isAuth(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/");
}

function redDash(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect("/dashboard")
    }
    next();
}

function isAuthenticated(req, res, next) {
    if (!req.isAuthenticated()) {
        throw new CustomError("The client must authenticate itself to get the requested response", {error: "Client no authenticated"}, "Unauthorized", statusCodes.Unauthorized);
    }
    next();
}

module.exports = {
    isAuth,
    redDash,
    isAuthenticated
}