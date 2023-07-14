const express = require("express");
const router = express.Router();
const teacherController = require("../controllers/teacherController");

router.use((req, res, next) => {
    console.log("Router for teacher page was started");
    next();
});

router.get(
    '/settings',
    teacherController.teacherPage
);

router.get(
    '/schedules',
    teacherController.teacherSchedule
);

router.get(
    '/appointments',
    teacherController.teacherAppt
);

router.get(
    '/addTimeProcess',
    teacherController.teacherAddAppt
);

router.get(
    '/attend',
    teacherController.teacherAttend
);

module.exports = router;