function editCourse(event) {
    let course_1 = [6701, 6533, 11583, 10157, 11801, 11301, 9075, 10972, 10972, 11150, 9659, 11206, 11834, 10263, 10042, 9399, 6359, 12565];
    let course_2 = [6701, 4699, 4739, 12991, 14178, 10477, 14887, 15047, 14737, 14837, 13444, 13494, 13311, 13264, 13138, 13389, 9162, 6672, 6359];
    let now = [4739, 14887, 15047, 14737, 14837, 13311, 6672, 12565, 6701]

    var courses_list = document.getElementsByClassName("courses frontpage-course-list-enrolled")[0].childNodes;

    switch (event.target.value) {
        case 'Курс 1':
            Array.from(courses_list).forEach(element => {
                element.hidden = false;
                if (!(course_1.includes(Number(element.getAttribute("data-courseid"))))) {
                    element.hidden = true;
                }
            });
            break;
        case 'Курс 2':
            Array.from(courses_list).forEach(element => {
                element.hidden = false;
                if (!(course_2.includes(Number(element.getAttribute("data-courseid"))))) {
                    element.hidden = true;
                }
            });
            break;
        case 'Полезное сейчас':
            Array.from(courses_list).forEach(element => {
                element.hidden = false;
                if (!(now.includes(Number(element.getAttribute("data-courseid"))))) {
                    element.hidden = true;
                }
            });
            break;
        case 'Сбросить':
            Array.from(courses_list).forEach(element => {
                element.hidden = false;
            });
            break;
    }
}

function observeDOM() {
    var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
            if (document.querySelector('course-search-container alone')) {
                onLoad();
                observer.disconnect();
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

function addEvent() {
    var array = document.getElementsByClassName('btn_course');
    Array.from(array).forEach(element => {
        element.addEventListener('click', editCourse)
    });
}

document.addEventListener('DOMContentLoaded', function () {
    chrome.storage.sync.get('filter', function (data) {
        if (data.filter === true) {
            if (window.location.href == "https://sdo.tusur.ru/" || window.location.href == "https://sdo.tusur.ru/#maincontent") {
                var div = document.createElement("div");
                var filter = document.getElementsByClassName("course-search-container alone")[0];
                div.innerHTML = '<div style="margin-top: 10px">' +
                    '<form class="course_filter_forms">' +
                    '<input type="submit" value="Курс 1" data-toggle="button" class="btn_course">' +
                    '</form>' +
                    '<form class="course_filter_forms">' +
                    '<input type="submit" value="Курс 2" data-toggle="button" class="btn_course">' +
                    '</form>' +
                    '<form class="course_filter_forms">' +
                    '<input type="submit" value="Полезное сейчас" data-toggle="button" class="btn_course">' +
                    '</form>' +
                    '<form class="course_filter_forms">' +
                    '<input type="submit" value="Сбросить" data-toggle="button" class="btn_course">' +
                    '</form>' +
                    '</div>'
                filter.appendChild(div);
                addEvent();
            }
        }
    });
});
