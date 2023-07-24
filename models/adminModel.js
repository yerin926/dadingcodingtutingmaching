//db정보받기
const db = require("../config/db.js");

module.exports = {
    getTeacherSchedule: async() => {
        try {
            rawQuery = `
            SELECT *
            FROM able_ttimes
            ORDER BY tt_tid;`;

            let res = await db.query(rawQuery);
            return res[0];
        } catch(err) {
            return err;
        }
    },

    getStudentSchedule: async() => {
        try {
            rawQuery = `
            SELECT *
            FROM able_stimes
            ORDER BY st_sid;`;

            let res = await db.query(rawQuery);
            return res[0];
        } catch(err) {
            return err;
        }
    }
}