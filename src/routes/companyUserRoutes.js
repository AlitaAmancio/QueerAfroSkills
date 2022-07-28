const express = require("express");
const router = express.Router();

const controller = require("../controllers/companyUserController");
const userAuthController = require("../controllers/companyUserAuthController");

const { checkAuth } = require("../middlewares/auth");

router.get("/all", controller.getAll);

router.get("/all/:id", controller.findById);

router.post("/create", controller.createCompany);

router.post('/login', userAuthController.login);

router.patch("/update/:id", checkAuth, controller.updateCompanyById);

router.delete("/delete/:id", checkAuth, controller.deleteCompanyById);

module.exports = router;
