function onLoad() {
    if (localStorage.getItem("login_redirect") == true){
        if (window.location.href == "https://sdo.tusur.ru/login/index.php")
        {
            window.location.replace("https://profile.tusur.ru/users/sign_in?redirect_url=https://sdo.tusur.ru/auth/edu/?id=1");
        }
    }
    if (localStorage.getItem("pdf_redirect") == true){
        var arr = document.getElementsByTagName("a");
        for (let index = 0; index < arr.length; index++) {
            arr[index].href = arr[index].href.replace("?forcedownload=1", "");
        }
    }
    
}

document.addEventListener("DOMContentLoaded", onLoad, false);