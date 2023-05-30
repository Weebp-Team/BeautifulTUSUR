function onLoad() {
    var theme_href = chrome.runtime.getURL("styles/theme.css");
    var link = document.createElement("link");
    link.href = theme_href;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(link);
}
document.addEventListener("DOMContentLoaded", onLoad, false);