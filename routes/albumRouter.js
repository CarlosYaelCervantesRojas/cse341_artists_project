const router = require("express").Router();

const albumController = require("../controllers/albumController");
const { handleErrors } = require("../utilities/");
const { isAuthenticated } = require("../utilities/middleware");


router.get("/", handleErrors(albumController.getAll));
router.get("/:id", handleErrors(albumController.getById));

router.post("/", isAuthenticated, handleErrors(albumController.createAlbum));

router.put("/:id", isAuthenticated, handleErrors(albumController.updateAlbum))

router.delete("/:id", isAuthenticated, handleErrors(albumController.deleteAlbum));


module.exports = router;