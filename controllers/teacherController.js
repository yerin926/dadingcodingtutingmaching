const teacherModel = require("../models/teacherModel.js");

//나중에 쿠키로 변경해야 함
const id = 'ywonchae1';

module.exports = {
    teacherPage: async(req, res) => {
        let teacherInfo = await teacherModel.getInfoById(id);
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

    teacherAppt: async(req, res) => {
        let teacherAppts = await teacherModel.getApptById(id);

        res.render(
            'user/userLayout.ejs',
            {
                content: 'teacher/appointment.ejs',
                info: teacherAppts
            }
        )
    },

    teacherAddAppt: async(req, res) => {
        console.log(req);
        await teacherModel.insertAppt();
        res.send('success');
    },

    teacherRegister: async(req, res) => {
    }
};