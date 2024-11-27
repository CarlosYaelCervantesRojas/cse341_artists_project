const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Project 2")
});

router.use("/artists", require("./artistRouter"));
router.use("/albums", require("./albumRouter"));
router.use("/api-docs", require("./swagger"));

module.exports = router;