const express = require("express");
const userController = require("../controllers/user");
const router = express.Router();
const authCheck = require("../middleware/check-auth");

router.post("/signup",userController.createUser);
router.post("/signin",userController.authenticate);
router.get("/profile", authCheck, userController.getProfileForConnectedUser);
router.get("/", authCheck, userController.getAllUsers);
router.delete("/:id", userController.deleteUser);


module.exports = router;
