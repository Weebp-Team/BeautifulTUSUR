
chrome.storage.sync.get('autologin', function (data) {
    if (data.autologin === true) {
        if (window.location.href == "https://sdo.tusur.ru/login/index.php") {
            window.location.replace("https://profile.tusur.ru/users/sign_in?redirect_url=https://sdo.tusur.ru/auth/edu/?id=1");
        }
    }
});