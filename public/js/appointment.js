let cnt = 0;
let deleteButtons = '';


document.addEventListener('DOMContentLoaded', () => {
    //추가한 일정 삭제
    deleteButtons = document.querySelectorAll('.delete-item');
    console.log(deleteButtons);
    deleteButtons.forEach((element) => {
        element.querySelector('.delete').addEventListener('click', (target) => {
            element.remove();
        });
    });
    // 일요일 일정 추가 버튼 클릭
    document.querySelector('#sundaySchedule').addEventListener('click', () => {
        let startTime = document.querySelector('#sun_start').value;
        let endTime = document.querySelector('#sun_end').value;
        if(startTime > endTime) {
            window.alert('입력 값이 잘못되었습니다.');
        } else if(startTime !== '' && endTime !== '') {
            let newElement = document.createElement('div');
            newElement.innerHTML = (`<div class='delete-item'><div class="row p-2">
            <input type="text" name="new" hidden value="${cnt++}">
            <input type="text" name="day" hidden value="일">
            <input type='text' name='startTime' hidden value='${startTime}'>
            <input type='text' name='endTime' hidden value='${endTime}'>
            <div class="col">일&nbsp;&nbsp;${startTime}&nbsp;<i class="ri-arrow-right-line"></i>&nbsp;${endTime}</div>
            <div class="col"><button type='button' class="delete"><i class="ri-delete-bin-line"></i></button></div>
            </div></div>`);
            let newAvailableElement = document.querySelector('#newAvailable');
            newAvailableElement.appendChild(newElement);
        } else {
            window.alert('누락된 정보가 있습니다.');
        }
        document.querySelector('#sun_start').value = null;
        document.querySelector('#sun_end').value = null;
        //추가한 일정 삭제
        deleteButtons = document.querySelectorAll('.delete-item');
        console.log(deleteButtons);
        deleteButtons.forEach((element) => {
            element.querySelector('.delete').addEventListener('click', (target) => {
                element.remove();
            });
        });
    });
    // 월요일 일정 추가 버튼 클릭
    document.querySelector('#mondaySchedule').addEventListener('click', () => {
        let startTime = document.querySelector('#mon_start').value;
        let endTime = document.querySelector('#mon_end').value;
        if(startTime > endTime) {
            window.alert('입력 값이 잘못되었습니다.');
        } else if(startTime !== '' && endTime !== '') {
            let newElement = document.createElement('div');
            newElement.innerHTML = (`<div class='delete-item'><div class="row p-2">
            <input type="text" name="new" hidden value="${cnt++}">
            <input type="text" name="day" hidden value="월">
            <input type='text' name='startTime' hidden value='${startTime}'>
            <input type='text' name='endTime' hidden value='${endTime}'>
            <div class="col">월&nbsp;&nbsp;${startTime}&nbsp;<i class="ri-arrow-right-line"></i>&nbsp;${endTime}</div>
            <div class="col"><button type='button' class="delete"><i class="ri-delete-bin-line"></i></button></div>
            </div></div>`);
            let newAvailableElement = document.querySelector('#newAvailable');
            newAvailableElement.appendChild(newElement);
        } else {
            window.alert('누락된 정보가 있습니다.');
        }
        document.querySelector('#mon_start').value = null;
        document.querySelector('#mon_end').value = null;
        //추가한 일정 삭제
        deleteButtons = document.querySelectorAll('.delete-item');
        console.log(deleteButtons);
        deleteButtons.forEach((element) => {
            element.querySelector('.delete').addEventListener('click', (target) => {
                element.remove();
            });
        });
    });
    // 화요일 일정 추가 버튼 클릭
    document.querySelector('#tuesdaySchedule').addEventListener('click', () => {
        let startTime = document.querySelector('#tue_start').value;
        let endTime = document.querySelector('#tue_end').value;
        if(startTime > endTime) {
            window.alert('입력 값이 잘못되었습니다.');
        } else if(startTime !== '' && endTime !== '') {
            let newElement = document.createElement('div');
            newElement.innerHTML = (`<div class='delete-item'><div class="row p-2">
            <input type="text" name="new" hidden value="${cnt++}">
            <input type="text" name="day" hidden value="화">
            <input type='text' name='startTime' hidden value='${startTime}'>
            <input type='text' name='endTime' hidden value='${endTime}'>
            <div class="col">화&nbsp;&nbsp;${startTime}&nbsp;<i class="ri-arrow-right-line"></i>&nbsp;${endTime}</div>
            <div class="col"><button type='button' class="delete"><i class="ri-delete-bin-line"></i></button></div>
            </div></div>`);
            let newAvailableElement = document.querySelector('#newAvailable');
            newAvailableElement.appendChild(newElement);
        } else {
            window.alert('누락된 정보가 있습니다.');
        }
        document.querySelector('#tue_start').value = null;
        document.querySelector('#tue_end').value = null;
        //추가한 일정 삭제
        deleteButtons = document.querySelectorAll('.delete-item');
        console.log(deleteButtons);
        deleteButtons.forEach((element) => {
            element.querySelector('.delete').addEventListener('click', (target) => {
                element.remove();
            });
        });
    });
    // 수요일 일정 추가 버튼 클릭
    document.querySelector('#wednesdaySchedule').addEventListener('click', () => {
        let startTime = document.querySelector('#wed_start').value;
        let endTime = document.querySelector('#wed_end').value;
        if(startTime > endTime) {
            window.alert('입력 값이 잘못되었습니다.');
        } else if(startTime !== '' && endTime !== '') {
            let newElement = document.createElement('div');
            newElement.innerHTML = (`<div class='delete-item'><div class="row p-2">
            <input type="text" name="new" hidden value="${cnt++}">
            <input type="text" name="day" hidden value="수">
            <input type='text' name='startTime' hidden value='${startTime}'>
            <input type='text' name='endTime' hidden value='${endTime}'>
            <div class="col">수&nbsp;&nbsp;${startTime}&nbsp;<i class="ri-arrow-right-line"></i>&nbsp;${endTime}</div>
            <div class="col"><button type='button' class="delete"><i class="ri-delete-bin-line"></i></button></div>
            </div></div>`);
            let newAvailableElement = document.querySelector('#newAvailable');
            newAvailableElement.appendChild(newElement);
        } else {
            window.alert('누락된 정보가 있습니다.');
        }
        document.querySelector('#wed_start').value = null;
        document.querySelector('#wed_end').value = null;
        //추가한 일정 삭제
        deleteButtons = document.querySelectorAll('.delete-item');
        console.log(deleteButtons);
        deleteButtons.forEach((element) => {
            element.querySelector('.delete').addEventListener('click', (target) => {
                element.remove();
            });
        });
    });
    // 목요일 일정 추가 버튼 클릭
    document.querySelector('#thursdaySchedule').addEventListener('click', () => {
        let startTime = document.querySelector('#thu_start').value;
        let endTime = document.querySelector('#thu_end').value;
        if(startTime > endTime) {
            window.alert('입력 값이 잘못되었습니다.');
        } else if(startTime !== '' && endTime !== '') {
            let newElement = document.createElement('div');
            newElement.innerHTML = (`<div class='delete-item'><div class="row p-2">
            <input type="text" name="new" hidden value="${cnt++}">
            <input type="text" name="day" hidden value="목">
            <input type='text' name='startTime' hidden value='${startTime}'>
            <input type='text' name='endTime' hidden value='${endTime}'>
            <div class="col">목&nbsp;&nbsp;${startTime}&nbsp;<i class="ri-arrow-right-line"></i>&nbsp;${endTime}</div>
            <div class="col"><button type='button' class="delete"><i class="ri-delete-bin-line"></i></button></div>
            </div></div>`);
            let newAvailableElement = document.querySelector('#newAvailable');
            newAvailableElement.appendChild(newElement);
        } else {
            window.alert('누락된 정보가 있습니다.');
        }
        document.querySelector('#thu_start').value = null;
        document.querySelector('#thu_end').value = null;
        //추가한 일정 삭제
        deleteButtons = document.querySelectorAll('.delete-item');
        console.log(deleteButtons);
        deleteButtons.forEach((element) => {
            element.querySelector('.delete').addEventListener('click', (target) => {
                element.remove();
            });
        });
    });
    // 금요일 일정 추가 버튼 클릭
    document.querySelector('#fridaySchedule').addEventListener('click', () => {
        let startTime = document.querySelector('#fri_start').value;
        let endTime = document.querySelector('#fri_end').value;
        if(startTime > endTime) {
            window.alert('입력 값이 잘못되었습니다.');
        } else if(startTime !== '' && endTime !== '') {
            let newElement = document.createElement('div');
            newElement.innerHTML = (`<div class='delete-item'><div class="row p-2">
            <input type="text" name="new" hidden value="${cnt++}">
            <input type="text" name="day" hidden value="금">
            <input type='text' name='startTime' hidden value='${startTime}'>
            <input type='text' name='endTime' hidden value='${endTime}'>
            <div class="col">금&nbsp;&nbsp;${startTime}&nbsp;<i class="ri-arrow-right-line"></i>&nbsp;${endTime}</div>
            <div class="col"><button type='button' class="delete"><i class="ri-delete-bin-line"></i></button></div>
            </div></div>`);
            let newAvailableElement = document.querySelector('#newAvailable');
            newAvailableElement.appendChild(newElement);
        } else {
            window.alert('누락된 정보가 있습니다.');
        }
        document.querySelector('#fri_start').value = null;
        document.querySelector('#fri_end').value = null;
        //추가한 일정 삭제
        deleteButtons = document.querySelectorAll('.delete-item');
        console.log(deleteButtons);
        deleteButtons.forEach((element) => {
            element.querySelector('.delete').addEventListener('click', (target) => {
                element.remove();
            });
        });
    });
    // 토요일 일정 추가 버튼 클릭
    document.querySelector('#saturdaySchedule').addEventListener('click', () => {
        let startTime = document.querySelector('#sat_start').value;
        let endTime = document.querySelector('#sat_end').value;
        if(startTime > endTime) {
            window.alert('입력 값이 잘못되었습니다.');
        } else if(startTime !== '' && endTime !== '') {
            let newElement = document.createElement('div');
            newElement.innerHTML = (`<div class='delete-item'><div class="row p-2">
            <input type="text" name="new" hidden value="${cnt++}">
            <input type="text" name="day" hidden value="토">
            <input type='text' name='startTime' hidden value='${startTime}'>
            <input type='text' name='endTime' hidden value='${endTime}'>
            <div class="col">토&nbsp;&nbsp;${startTime}&nbsp;<i class="ri-arrow-right-line"></i>&nbsp;${endTime}</div>
            <div class="col"><button type='button' class="delete"><i class="ri-delete-bin-line"></i></button></div>
            </div></div>`);
            let newAvailableElement = document.querySelector('#newAvailable');
            newAvailableElement.appendChild(newElement);
        } else {
            window.alert('누락된 정보가 있습니다.');
        }
        document.querySelector('#sat_start').value = null;
        document.querySelector('#sat_end').value = null;
        //추가한 일정 삭제
        deleteButtons = document.querySelectorAll('.delete-item');
        console.log(deleteButtons);
        deleteButtons.forEach((element) => {
            element.querySelector('.delete').addEventListener('click', (target) => {
                element.remove();
            });
        });
    });
});
