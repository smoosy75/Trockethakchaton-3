const express = require("express");

const router = express.Router();

const vesselsControllers = require("./controllers/vesselsControllers");
const usersControllers = require("./controllers/usersControllers");
const companyControllers = require("./controllers/company.controlers");

router.get("/vessels", vesselsControllers.browse);
router.get("/vessels/:id", vesselsControllers.read);
router.put("/vessels/:id", vesselsControllers.edit);
router.post("/vessels", vesselsControllers.add);
router.delete("/vessels/:id", vesselsControllers.destroy);

router.get("/users", usersControllers.browse);
router.get("/users/:id", usersControllers.read);
router.put("/users/:id", usersControllers.edit);
router.post("/users", usersControllers.add);
router.delete("/users/:id", usersControllers.destroy);

router.get("/company", companyControllers.browse);
router.get("/company/:id", companyControllers.read);
router.put("/company/:id", companyControllers.edit);
router.post("/company", companyControllers.add);
router.delete("/company/:id", companyControllers.destroy);

module.exports = router;
