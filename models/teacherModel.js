//db정보받기
const db = require("../config/db.js");

module.exports = {
    //id로 계정 정보 가져오기
    getInfoById: async(id) => {
        try {
            let rawQuery = `
            SELECT *
            FROM teachers
            JOIN accounts
            ON t_id=id
            WHERE id=?;`;
            let res = await db.query(rawQuery, [id]);
            return res[0][0]; //정보의 묶음이 하나임
        } catch(err) {
            return err;
        }
    },

    getScheduleById: async(id) => {
        try {
            let rawQuery = `
            SELECT c_id, c_tid, c_sid, c_datetime,
            CASE WEEKDAY('20160118') 
            WHEN '0' THEN '월요일'
            WHEN '1' THEN '화요일'
            WHEN '2' THEN '수요일'
            WHEN '3' THEN '목요일'
            WHEN '4' THEN '금요일'
            WHEN '5' THEN '토요일'
            WHEN '6' THEN '일요일'
            END as weekday,
            DATE_FORMAT(c_datetime, '%H : %i') AS time,
            MONTH(c_datetime) AS month,
            DAY(c_datetime) AS day
            FROM classes
            WHERE c_tid=?`
            let res = await db.query(rawQuery, [id]);
            return res[0];
        } catch(err) {
            return err;
        }
    },

    getApptById: async(id) => {
        try {
            let rawQuery = `
            SELECT tt_id, tt_tid, tt_day, tt_start, tt_end,
            TIME_FORMAT(tt_start, '%H:%i') AS form_tt_start, TIME_FORMAT(tt_end, '%H:%i') AS form_tt_end
            FROM able_ttimes
            WHERE tt_tid=?`
            let res = await db.query(rawQuery, [id]);
            console.log(res[0])
            return res[0];
        } catch(err) {
            return err;
        }
    },

    insertAppt: async() => {
        return 0;
    }
}