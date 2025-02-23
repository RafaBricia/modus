const express = require("express");
const router = express.Router();
const adminController = require("../controller/adminController.js");

router.get("/admin", adminController.getAllAdmins);
router.post("/admin", adminController.postAdmin);
router.delete("/admin/:id", adminController.deleteAdmin);
router.put("/admin/:id", adminController.putAdmin);

module.exports = router;

