//시간을 클릭하면 색칠하기
function onClickTime(when) {
    let timebox = document.querySelector(`.${when}`);
    console.log(timebox);

    if(timebox.classList.contains('filled')) {
        timebox.classList.remove('filled');
    } else {
        timebox.classList.add('filled');
    }
}

//등록된 시간은 미리 색칠하기
function currentTeacherSchedule() {
    //컨트롤러에서 일정 가져오기
    let jsonClasses = document.querySelector("#jsonClasses").value;
    //문자열로 오니까 json 타입으로 변환
    jsonClasses = JSON.parse(jsonClasses);

    jsonClasses.forEach((element) => {
        let day = '';
        switch(element.day) {
            case '월':
                day = 'mon';
                break;
            case '화':
                day = 'tue';
                break;
            case '수':
                day = 'wed';
                break;
            case '목':
                day = 'thu';
                break;
            case '금':
                day = 'fri';
                break;
            case '토':
                day = 'sat';
                break;
            case '일':
                day = 'sun';
                break;
        }

        let hour = Number(element.form_start.slice(0, 2));
        let min = Number(element.form_start.slice(3, 5));
        while(true) {
            let className = '';
            if(min == 0) {
                className = `.${day}${hour}`;
                document.querySelector(className).classList.add('filled');
                min += 30;
            } else {
                className = `.${day}${hour}${min}`;
                document.querySelector(className).classList.add('filled');
                hour += 1;
                min -= 30;
            }
            
            if(hour > Number(element.form_end.slice(0, 2))) break;
        }
    })
}

currentTeacherSchedule();

//시간을 분으로 변환하는 함수
function hourToMin(timeString) {
    let result = Number(timeString.slice(3, 5)) * 60;
    if(timeString.length === 7) {
        result += Number(timeString.slice(5, 7));
    }
    return result;
}

//class를 DB저장용 문자열로 변환하는 함수
function DBTimeString(timeClass) {
    let result = '';
    if(timeClass.length === 7) {
        result = `${timeClass.slice(3, 5)}:${timeClass.slice(5, 7)}`;
    } else {
        result = `${timeClass.slice(3, 5)}:00`;
    }
    return result;
}

const addAllBtn = document.querySelector('.appt-all');
const timeContainer = document.querySelector('.time-container');

addAllBtn.addEventListener('click', () => {
    let allTimeBox = document.querySelectorAll('.timebox');
    let filledTimeBox = [];
    //색칠된 시간만 가져오기
    allTimeBox.forEach(element => {
        if(element.classList.contains('filled')) {
            filledTimeBox.push(element);
        }
    });
    //요일, 시간별 정렬
    filledTimeBox.sort((a, b) => {
        if(a.classList[1] < b.classList[1]) {
            return -1;
        } else {
            return 1;
        }
    });
    
    timeContainer.innerHTML = '';
    
    for(let i = 0; i < filledTimeBox.length; i++) {
        let start_time = '';
        let end_time = '';
        let startTimeClass = filledTimeBox[i].classList[1];
        let day = startTimeClass.slice(0, 3);
        start_time = DBTimeString(startTimeClass);
        let endTimeClass = filledTimeBox[i].classList[1];
        end_time = DBTimeString(endTimeClass);

        for(let j = i + 1; j < filledTimeBox.length; j++) {
            let lastTimeClass = filledTimeBox[j-1].classList[1];
            let nextTimeClass = filledTimeBox[j].classList[1];
            if(lastTimeClass.slice(0, 3) != nextTimeClass.slice(0, 3)
            || hourToMin(lastTimeClass) + 30 != hourToMin(nextTimeClass)) {
                end_time = DBTimeString(lastTimeClass);
                i = j - 1;
                break;
            } else if(j + 1 === filledTimeBox.length) {
                end_time = DBTimeString(nextTimeClass);
                i = j - 1;
                break;
            }
        }
        console.log(day, '-', start_time, end_time);

        switch(day) {
            case 'mon':
                day = '월';
                break;
            case 'tue':
                day = '화';
                break;
            case 'wed':
                day = '수';
                break;
            case 'thu':
                day = '목';
                break;
            case 'fri':
                day = '금';
                break;
            case 'sat':
                day = '토';
                break;
            case 'sun':
                day = '일';
                break;
        }

        timeContainer.innerHTML += `<div class='delete-item'><div class="row p-2">
        <input type="text" name="day" hidden value="${day}">
        <input type='text' name='startTime' hidden value='${start_time}'>
        <input type='text' name='endTime' hidden value='${end_time}'>
        <div class="col">${day}&nbsp;&nbsp;${start_time}&nbsp;<i
          class="ri-arrow-right-line"></i>&nbsp;${end_time}</div>
          <div class="col"><button type='button' class="delete"><i class="ri-delete-bin-line"></i></button></div>
        </div></div>`;
    }

    deleteButtons = document.querySelectorAll('.delete-item');
    deleteButtons.forEach((element) => {
        element.querySelector('.delete').addEventListener('click', (target) => {
            element.remove();
        });
    });
});

deleteButtons = document.querySelectorAll('.delete-item');
deleteButtons.forEach((element) => {
    element.querySelector('.delete').addEventListener('click', (target) => {
        element.remove();
    });
});