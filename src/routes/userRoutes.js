const express = require("express");
const router = express.Router();

const controller = require("../controllers/userController");
const userAuthController = require("../controllers/userAuthController");

const { checkAuth } = require("../middlewares/auth");

router.get("/all", controller.getAll);

router.get("/all/:id", controller.findById);

router.post("/create", controller.createUser);

router.post('/login', userAuthController.login);

router.patch("/update/:id", checkAuth, controller.updateUserById);

router.delete("/delete/:id", checkAuth, controller.deleteUserById);

module.exports = router;
