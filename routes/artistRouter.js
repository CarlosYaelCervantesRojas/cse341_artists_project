const router = require("express").Router();

const artistController = require("../controllers/artistController");
const { handleErrors } = require("../utilities/index");

router.get("/", handleErrors(artistController.getAll));
router.get("/:id", handleErrors(artistController.getById));

router.post("/", handleErrors(artistController.createArtist));

router.put("/:id", handleErrors(artistController.updateArtist))

router.delete("/:id", handleErrors(artistController.deleteArtist));


module.exports = router;