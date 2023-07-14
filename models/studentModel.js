//db정보받기
const db = require("../config/db.js");

module.exports = {
    //id로 계정 정보 가져오기
    getInfoById: async(id) => {
        try {
            let rawQuery = `
            SELECT *
            FROM students
            JOIN accounts
            ON s_id=id
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
            WHERE c_sid=?`
            let res = await db.query(rawQuery, [id]);
            return res[0];
        } catch(err) {
            return err;
        }
    },

    getApptById: async(id) => {
        try {
            let rawQuery = `
            SELECT st_id, st_sid, st_day, st_start, st_end,
            TIME_FORMAT(st_start, '%H:%i') AS form_tt_start, TIME_FORMAT(st_end, '%H:%i') AS form_tt_end
            FROM able_stimes
            WHERE st_sid=?`
            let res = await db.query(rawQuery, [id]);
            return res[0];
        } catch(err) {
            return err;
        }
    },

    insertAppt: async(id, data) => {
        try {
            let rawQuery = `
            INSERT INTO able_stimes (st_sid, st_day, st_start, st_end)
            VALUES (?, ?, ?, ?);
            `

            dataLength = data['new'].length;
            if(dataLength === 0) {
                return;
            } else if(dataLength === 1) {
                await db.query(rawQuery, [id, data['day'], data['startTime'], data['endTime']]);
            } else {
                for(let i = 0; i < dataLength; i++) {
                    await db.query(rawQuery, [id, data['day'][i], data['startTime'][i], data['endTime'][i]]);
                }
            }
        } catch(err) {
            return err;
        }
    },

    deleteAppt: async(id, data) => {
        try {
            let getApptRawQuery = `
            SELECT st_id
            FROM able_stimes
            WHERE st_sid=?;`;
            let rawQuery = `
            DELETE FROM able_stimes
            WHERE st_id=?;`;
            let res = await db.query(getApptRawQuery, [id]);
            let appt = res[0];
            let apptList = [];
            for(let j = 0; j < appt.length; j++) {
                apptList.push(appt[j]['st_id']);
            }
            console.log(apptList, data['ttId']);
            for(let i = 0; i < apptList.length; i++) {
                if(data['ttId'].indexOf(String(apptList[i])) == -1) {
                    // data 리스트에 없는 경우 : 삭제해야 함
                    await db.query(rawQuery, [apptList[i]]);
                }
            }
        } catch(err) {
            return err;
        }
    }
}