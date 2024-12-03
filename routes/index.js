const router = require("express").Router();

const { isAuth, redDash } = require("../utilities/middleware");

router.get("/", 
    redDash,
    (req, res) => {
        res.send("CSE341 PROJECT 2 API <br> <a href='/auth/google'>Login</a>")
    }
);

router.get("/dashboard",
    isAuth,
    (req, res) => {
        res.send("CSE341 PROJECT 2 API - Dashboard <br> <a href='/api-docs'>CSE341 PROJECT 2 API DOCS</a> <br> <a href='/logout'>Logout</a>");
    }
);

router.get("/logout",
    isAuth,
    (req, res, next) => {
        req.logout(function(err) {
            if (err) { return next(err); }
            res.redirect("/");
        });
});

router.use("/artists", require("./artistRouter"));
router.use("/albums", require("./albumRouter"));
router.use("/api-docs", require("./swagger"));
router.use("/auth", require("./authRouter"));

module.exports = router;