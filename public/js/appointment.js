document.addEventListener('DOMContentLoaded', () => {
    // 일요일 일정 추가 버튼 클릭
    document.querySelector('#sundaySchedule').addEventListener('click', () => {
        let startTime = document.querySelector('#sun_start').value;
        let endTime = document.querySelector('#sun_end').value;
        if(startTime > endTime) {
            window.alert('입력 값이 잘못되었습니다.');
        } else if(startTime !== '' && endTime !== '') {
            document.querySelector('#newAvailable').innerHTML += `
            <form action="" class="timeform">
            <div class="row p-2">
            <div class="col">일&nbsp;&nbsp;${startTime}&nbsp;<i class="ri-arrow-right-line"></i>&nbsp;${endTime}</div>
            <div class="col"><button id="new" class="delete"><i class="ri-delete-bin-line"></i></button></div>
            </div>
            </form>`;
        } else {
            window.alert('누락된 정보가 있습니다.');
        }
        document.querySelector('#sun_start').value = null;
        document.querySelector('#sun_end').value = null;
    });
    // 월요일 일정 추가 버튼 클릭
    document.querySelector('#mondaySchedule').addEventListener('click', () => {
        let startTime = document.querySelector('#mon_start').value;
        let endTime = document.querySelector('#mon_end').value;
        if(startTime > endTime) {
            window.alert('입력 값이 잘못되었습니다.');
        } else if(startTime !== '' && endTime !== '') {
            document.querySelector('#newAvailable').innerHTML += `
            <form action="" class="timeform">
            <div class="row p-2">
            <div class="col">월&nbsp;&nbsp;${startTime}&nbsp;<i class="ri-arrow-right-line"></i>&nbsp;${endTime}</div>
            <div class="col"><button id="new" class="delete"><i class="ri-delete-bin-line"></i></button></div>
            </div>
            </form>`;
        } else {
            window.alert('누락된 정보가 있습니다.');
        }
        document.querySelector('#mon_start').value = null;
        document.querySelector('#mon_end').value = null;
    });
    // 화요일 일정 추가 버튼 클릭
    document.querySelector('#tuesdaySchedule').addEventListener('click', () => {
        let startTime = document.querySelector('#tue_start').value;
        let endTime = document.querySelector('#tue_end').value;
        if(startTime > endTime) {
            window.alert('입력 값이 잘못되었습니다.');
        } else if(startTime !== '' && endTime !== '') {
            document.querySelector('#newAvailable').innerHTML += `
            <form action="" class="timeform">
            <div class="row p-2">
            <div class="col">화&nbsp;&nbsp;${startTime}&nbsp;<i class="ri-arrow-right-line"></i>&nbsp;${endTime}</div>
            <div class="col"><button id="new" class="delete"><i class="ri-delete-bin-line"></i></button></div>
            </div>
            </form>`;
        } else {
            window.alert('누락된 정보가 있습니다.');
        }
        document.querySelector('#tue_start').value = null;
        document.querySelector('#tue_end').value = null;
    });
    // 수요일 일정 추가 버튼 클릭
    document.querySelector('#wednesdaySchedule').addEventListener('click', () => {
        let startTime = document.querySelector('#wed_start').value;
        let endTime = document.querySelector('#wed_end').value;
        if(startTime > endTime) {
            window.alert('입력 값이 잘못되었습니다.');
        } else if(startTime !== '' && endTime !== '') {
            document.querySelector('#newAvailable').innerHTML += `
            <form action="" class="timeform">
            <div class="row p-2">
            <div class="col">수&nbsp;&nbsp;${startTime}&nbsp;<i class="ri-arrow-right-line"></i>&nbsp;${endTime}</div>
            <div class="col"><button id="new" class="delete"><i class="ri-delete-bin-line"></i></button></div>
            </div>
            </form>`;
        } else {
            window.alert('누락된 정보가 있습니다.');
        }
        document.querySelector('#wed_start').value = null;
        document.querySelector('#wed_end').value = null;
    });
    // 목요일 일정 추가 버튼 클릭
    document.querySelector('#thursdaySchedule').addEventListener('click', () => {
        let startTime = document.querySelector('#thu_start').value;
        let endTime = document.querySelector('#thu_end').value;
        if(startTime > endTime) {
            window.alert('입력 값이 잘못되었습니다.');
        } else if(startTime !== '' && endTime !== '') {
            document.querySelector('#newAvailable').innerHTML += `
            <form action="" class="timeform">
            <div class="row p-2">
            <div class="col">목&nbsp;&nbsp;${startTime}&nbsp;<i class="ri-arrow-right-line"></i>&nbsp;${endTime}</div>
            <div class="col"><button id="new" class="delete"><i class="ri-delete-bin-line"></i></button></div>
            </div>
            </form>`;
        } else {
            window.alert('누락된 정보가 있습니다.');
        }
        document.querySelector('#thu_start').value = null;
        document.querySelector('#thu_end').value = null;
    });
    // 금요일 일정 추가 버튼 클릭
    document.querySelector('#fridaySchedule').addEventListener('click', () => {
        let startTime = document.querySelector('#fri_start').value;
        let endTime = document.querySelector('#fri_end').value;
        if(startTime > endTime) {
            window.alert('입력 값이 잘못되었습니다.');
        } else if(startTime !== '' && endTime !== '') {
            document.querySelector('#newAvailable').innerHTML += `
            <form action="" class="timeform">
            <div class="row p-2">
            <div class="col">금&nbsp;&nbsp;${startTime}&nbsp;<i class="ri-arrow-right-line"></i>&nbsp;${endTime}</div>
            <div class="col"><button id="new" class="delete"><i class="ri-delete-bin-line"></i></button></div>
            </div>
            </form>`;
        } else {
            window.alert('누락된 정보가 있습니다.');
        }
        document.querySelector('#fri_start').value = null;
        document.querySelector('#fri_end').value = null;
    });
    // 토요일 일정 추가 버튼 클릭
    document.querySelector('#saturdaySchedule').addEventListener('click', () => {
        let startTime = document.querySelector('#sat_start').value;
        let endTime = document.querySelector('#sat_end').value;
        if(startTime > endTime) {
            window.alert('입력 값이 잘못되었습니다.');
        } else if(startTime !== '' && endTime !== '') {
            document.querySelector('#newAvailable').innerHTML += `
            <form action="" class="timeform">
            <div class="row p-2">
            <div class="col">토&nbsp;&nbsp;${startTime}&nbsp;<i class="ri-arrow-right-line"></i>&nbsp;${endTime}</div>
            <div class="col"><button id="new" class="delete"><i class="ri-delete-bin-line"></i></button></div>
            </div>
            </form>`;
        } else {
            window.alert('누락된 정보가 있습니다.');
        }
        document.querySelector('#sat_start').value = null;
        document.querySelector('#sat_end').value = null;
    });
});