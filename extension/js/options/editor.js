var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/json");
editor.session.on('change', function (delta) {
    try {
        json = JSON.parse(editor.getValue());
        localStorage.setItem('login_redirect', json["login_redirect"]);
        localStorage.setItem('pdf_redirect', json["pdf_redirect"]);
        localStorage.setItem('course_filter', json["course_filter"]);
    }
    catch { }
});