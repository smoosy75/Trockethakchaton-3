const express = require("express");

const router = express.Router();

const vesselsControllers = require("./controllers/vesselsControllers");

router.get("/vessels", vesselsControllers.browse);
router.get("/vessels/:id", vesselsControllers.read);
router.put("/vessels/:id", vesselsControllers.edit);
router.post("/vessels", vesselsControllers.add);
router.delete("/vessels/:id", vesselsControllers.destroy);

module.exports = router;
