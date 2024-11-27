const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Project 2")
});

router.use("/artists", require("./artistRouter"));
router.use("/albums", require("./albumRouter"));

module.exports = router;