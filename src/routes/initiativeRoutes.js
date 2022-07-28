const express = require("express");
const router = express.Router();

const controller = require("../controllers/initiativeController");

const { checkAuth } = require("../middlewares/auth");

router.get("/all", controller.findAllInitiatives);

router.get("/:id", controller.findById);

router.post("/create", checkAuth, controller.createInitiative);

router.patch("/update/:id", checkAuth, controller.updateInitiativeById);

router.delete("/delete/:id", checkAuth, controller.deleteInitiative);

module.exports = router;
