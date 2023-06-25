document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.sync.get('buttons', function (data) {
        if (data.buttons === true) {
            if (window.location.host == "sdo.tusur.ru") {
                var ocenka = document.createElement("li");
                var attendance = document.createElement("li");
                var buttons = document.getElementsByClassName("navbar-nav")[0];
                ocenka.innerHTML = '<li class="nav-item">'+
                '<a class="nav-item nav-link" href="https://ocenka.tusur.ru/student#/my_progress">Оценки</a>'+
                '</li>'
                attendance.innerHTML = '<li class="nav-item">'+
                '<a class="nav-item nav-link" href="http://timetable.tusur.ru/faculties/fvs/groups/571-2">Расписание</a>'+
                '</li>'
                buttons.appendChild(ocenka);
                buttons.appendChild(attendance);
            }
        }
    });
});