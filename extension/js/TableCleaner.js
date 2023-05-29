function removeTableRows() {
  var rows = document.querySelectorAll('.ng-scope.do-not-need-to-study');
  rows.forEach(function (row) {
    row.parentNode.removeChild(row);
  });
}

function observeDOM() {
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (document.querySelector('.ng-scope.do-not-need-to-study')) {
        removeTableRows();
        observer.disconnect();
      }
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

if (window.location.hostname === 'ocenka.tusur.ru') {
  document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.ng-scope.do-not-need-to-study')) {
      removeTableRows();
    } else {
      observeDOM();
    }
  });
}