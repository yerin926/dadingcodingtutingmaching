const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");

router.use((req, res, next) => {
    console.log("Router for student page was started");
    next();
});

router.get(
    '/settings',
    studentController.studentPage
);

router.get(
    '/schedules',
    studentController.studentSchedule
);

router.get(
    '/appointments',
    studentController.studentAppt
);

router.post(
    '/confirmAbleTime',
    studentController.studentAddAppt
);

router.get(
    '/attend',
    //teacherController.teacherPage
);

module.exports = router;