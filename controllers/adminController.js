const adminModel = require("../models/adminModel.js");

module.exports = {
    getAdminInfo: async(req, res) => {

    },
    
    getSchedules: async(req, res) => {
        let teacherSchedule = await adminModel.getTeacherSchedule();
        let studentSchedule = await adminModel.getStudentSchedule();

        res.render(
            'admin/schedules.ejs',
            {
                teacherSchedule: teacherSchedule,
                studentSchedule: studentSchedule
            }
        );
    }
};