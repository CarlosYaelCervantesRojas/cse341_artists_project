const router = require("express").Router();

const albumController = require("../controllers/albumController");
const { handleErrors } = require("../utilities/");

router.get("/", handleErrors(albumController.getAll));
router.get("/:id", handleErrors(albumController.getById));

router.post("/", handleErrors(albumController.createAlbum));

router.put("/:id", handleErrors(albumController.updateAlbum))

router.delete("/:id", handleErrors(albumController.deleteAlbum));


module.exports = router;