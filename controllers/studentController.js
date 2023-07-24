const studentModel = require("../models/studentModel.js");

const id = 'sungyeon';

module.exports = {
    studentPage: async(req, res) => {
        let studentInfo = await studentModel.getInfoById(id);

        res.render(
            'user/userLayout.ejs',
            {
                content: 'student/settings.ejs',
                info: studentInfo
            }
        );
    },

    studentSchedule: async(req, res) => {
        let studentSchedules = await studentModel.getScheduleById(id);
        
        res.render(
            'user/userLayout.ejs',
            {
                content: 'student/schedules.ejs',
                info: studentSchedules
            }
        );
    },

    studentAppt: async(req, res) => {
        let studentAppts = await studentModel.getApptById(id);

        res.render(
            'user/userLayout.ejs',
            {
                content: 'student/appointment.ejs',
                info: studentAppts
            }
        )
    },

    studentAddAppt: async(req, res) => {
        await studentModel.addAppt(id, req.body);
        res.redirect('/student/appointments');
    },
};