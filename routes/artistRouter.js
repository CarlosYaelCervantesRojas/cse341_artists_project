const router = require("express").Router();

const artistController = require("../controllers/artistController");
const { handleErrors } = require("../utilities/index");
const { isAuthenticated } = require("../utilities/middleware");

router.get("/", handleErrors(artistController.getAll));
router.get("/:id", handleErrors(artistController.getById));

router.post("/", isAuthenticated, handleErrors(artistController.createArtist));

router.put("/:id", isAuthenticated, handleErrors(artistController.updateArtist))

router.delete("/:id", isAuthenticated, handleErrors(artistController.deleteArtist));


module.exports = router;