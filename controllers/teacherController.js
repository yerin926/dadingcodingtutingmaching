const teacherModel = require("../models/teacherModel.js");

//나중에 쿠키로 변경해야 함
const id = 'ywonchae1';

module.exports = {
    teacherPage: async(req, res) => {
        let teacherInfo = await teacherModel.getInfoById(id);
        console.log(teacherInfo);
        res.render(
            'user/userLayout.ejs',
            {
                content: 'teacher/settings.ejs',
                info: teacherInfo
            }
        );
    },

    teacherSchedule: async(req, res) => {
        let teacherSchedules = await teacherModel.getScheduleById(id);
        res.render(
            'user/userLayout.ejs',
            {
                content: 'teacher/schedules.ejs',
                info: teacherSchedules
            }
        );
    },

    teacherRegister: async(req, res) => {
    }
};