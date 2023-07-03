function initCalendar(thisMonth) {
    let currentYear = thisMonth.getFullYear(); //달력에 표시되는 년도
    let currentMonth = thisMonth.getMonth(); //달력에 표시되는 월
    let currentDate = thisMonth.getDate(); //달력에 표시되는 일

    //캘린더 렌더링
    function renderCalendar(thisMonth) {
        //이전 달의 마지막 날 날짜와 요일 구하기
        let startDay = new Date(currentYear, currentMonth, 0);
        let prevDate = startDay.getDate();
        let prevDay = startDay.getDay();

        //이번 달의 마지막 날 날짜와 요일 구하기
        let endDay = new Date(currentYear, currentMonth + 1, 0);
        let nextDate = endDay.getDate();
        let nextDay = endDay.getDay();

        //달력 제목 지정 - 2023년 6월
        document.querySelector(`.dateTitle`).innerText = `${currentYear}.${currentMonth + 1}.`
        
        //컨트롤러에서 일정 가져오기
        let jsonClasses = document.querySelector("#jsonClasses").value;
        //문자열로 오니까 json 타입으로 변환
        jsonClasses = JSON.parse(jsonClasses);

        let thisMonthClasses = [];

        //선택된 월에 해당하는 일정만 뽑기
        for (let k = 0; k < jsonClasses.length; k++) {
            if (jsonClasses[k].month == currentMonth + 1) {
                thisMonthClasses.push(jsonClasses[k]);
            }
        }

        //달력을 구성하는 코드
        let calendarHTML = '';

        //5월 ...29, 30, 31일
        for (let i = prevDate - prevDay; i <= prevDate; i++) {
            calendarHTML += `
            <div class="noColor">${i}</div>`;
        }
        
        //6월 1...30일
        for (let i = 1; i <= nextDate; i++) {
            let todaySchedule = `<div>${i}`;
            thisMonthClasses.forEach((element) => {
                if (element.day == i) {
                    todaySchedule += `<p>${element.c_sid}</p><p>${element.time}</p>`;
                }
            });
            todaySchedule += `</div>`;
            calendarHTML += todaySchedule;
        }

        //7월 1, 2, ...일
        for (let i = 1; i <= (6 - nextDay == 0 ? 0 : 6 - nextDay); i++) {
            calendarHTML += `<div class="noColor">${i}</div>`;
        }

        document.querySelector(`.dateBoard`).innerHTML = calendarHTML;
    }

    renderCalendar(thisMonth);
}

let thisMonth = new Date(); //달력에 표시되는 날짜 객체

initCalendar(thisMonth);

// 이전달 이동
// setMonth로 thisMonth의 값이 변경되기 때문에 두번 눌러도 -1만 해서 이전 달로 이동이 가능
document.querySelector(`.prevDay`).onclick = () => {
    initCalendar(new Date(thisMonth.setMonth(thisMonth.getMonth() - 1)));
}

// 다음달 이동
document.querySelector(`.nextDay`).onclick = () => {
    initCalendar(new Date(thisMonth.setMonth(thisMonth.getMonth() + 1)));
}