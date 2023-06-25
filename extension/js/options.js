document.addEventListener('DOMContentLoaded', function () {
    var viewerInput = document.getElementById('viewer');
    var blackThemeInput = document.getElementById('black_theme');
    var autologinInput = document.getElementById('autologin');
    var filterInput = document.getElementById('filter');
    var electives = document.getElementById('electives');
    var buttons = document.getElementById('buttons');
    var resetButton = document.getElementById('reset_button');

    chrome.storage.sync.get(['viewer', 'blackTheme', 'autologin', 'filter', 'electives'], function (data) {
        if (data.viewer === undefined) {
            chrome.storage.sync.set({ 'viewer': true });
            viewerInput.checked = true;
        } else {
            viewerInput.checked = data.viewer;
        }

        if (data.blackTheme === undefined) {
            chrome.storage.sync.set({ 'blackTheme': true });
            blackThemeInput.checked = true;
        } else {
            blackThemeInput.checked = data.blackTheme;
        }

        if (data.autologin === undefined) {
            chrome.storage.sync.set({ 'autologin': true });
            autologinInput.checked = true;
        } else {
            autologinInput.checked = data.autologin;
        }

        if (data.filter === undefined) {
            chrome.storage.sync.set({ 'filter': true });
            filterInput.checked = true;
        } else {
            filterInput.checked = data.filter;
        }

        if (data.electives === undefined) {
            chrome.storage.sync.set({ 'electives': true });
            electives.checked = true;
        } else {
            electives.checked = data.electives;
        }
        if (data.buttons === undefined) {
            chrome.storage.sync.set({ 'buttons': true });
            buttons.checked = true;
        } else {
            buttons.checked = data.buttons;
        }
    });

    viewerInput.addEventListener('change', function () {
        chrome.storage.sync.set({ 'viewer': viewerInput.checked });
    });

    blackThemeInput.addEventListener('change', function () {
        chrome.storage.sync.set({ 'blackTheme': blackThemeInput.checked });
    });

    autologinInput.addEventListener('change', function () {
        chrome.storage.sync.set({ 'autologin': autologinInput.checked });
    });

    filterInput.addEventListener('change', function () {
        chrome.storage.sync.set({ 'filter': filterInput.checked });
    });

    electives.addEventListener('change', function () {
        chrome.storage.sync.set({ 'electives': electives.checked });
    });

    buttons.addEventListener('change', function () {
        chrome.storage.sync.set({ 'buttons': buttons.checked });
    });

    resetButton.addEventListener('click', function () {
        viewerInput.checked = true;
        blackThemeInput.checked = true;
        autologinInput.checked = true;
        filterInput.checked = true;
        electives.checked = true;
        buttons.checked = true;

        chrome.storage.sync.set({ 'viewer': viewerInput.checked });
        chrome.storage.sync.set({ 'blackTheme': blackThemeInput.checked });
        chrome.storage.sync.set({ 'autologin': autologinInput.checked });
        chrome.storage.sync.set({ 'filter': filterInput.checked });
        chrome.storage.sync.set({ 'electives': electives.checked });
        chrome.storage.sync.set({ 'buttons': buttons.checked });
    })
});