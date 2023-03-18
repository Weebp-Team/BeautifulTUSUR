function onLoad() {
    if (window.location.href == "https://sdo.tusur.ru/login/index.php")
    {
        window.location.replace("https://profile.tusur.ru/users/sign_in?redirect_url=https://sdo.tusur.ru/auth/edu/?id=1");
    }
    var arr = document.getElementsByTagName("a");
    for (let index = 0; index < arr.length; index++) {
        arr[index].href = arr[index].href.replace("?forcedownload=1", "");
    }
}

document.addEventListener("DOMContentLoaded", onLoad, false);