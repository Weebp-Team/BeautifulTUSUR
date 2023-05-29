function onLoad() {
    var arr = document.getElementsByTagName("a");
    for (let index = 0; index < arr.length; index++) {
        arr[index].href = arr[index].href.replace("?forcedownload=1", "");
    }
}
document.addEventListener("DOMContentLoaded", onLoad, false);