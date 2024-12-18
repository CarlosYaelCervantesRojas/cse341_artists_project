const passport = require("passport");

const router = require("express").Router();


router.get("/google", passport.authenticate("google", { scope: ["profile"] }));

router.get("/google/callback", passport.authenticate("google", { failureRedirect: '/', successRedirect: "/dashboard" }));


module.exports = router;