const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.use((req, res, next) => {
    console.log("Router for admin page was started");
    next();
});

router.get(
    '/settings',
    // adminController.getAdminInfo
);

router.get(
    '/schedules',
    adminController.getSchedules
);

module.exports = router;