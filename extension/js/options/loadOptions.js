var settings = document.getElementById("editor");


if (localStorage.getItem("login_redirect") == null) localStorage.setItem("login_redirect", true);
if (localStorage.getItem("pdf_redirect") == null) localStorage.setItem("pdf_redirect", true);
if (localStorage.getItem("course_filter") == null) localStorage.setItem("course_filter", true);

login_redirect = localStorage.getItem('login_redirect');
pdf_redirect = localStorage.getItem('pdf_redirect');
course_filter = localStorage.getItem('course_filter');

settings.innerHTML = 
`{
    "login_redirect": ${login_redirect}, 
    "pdf_redirect": ${pdf_redirect}, 
    "course_filter": ${course_filter}
}`