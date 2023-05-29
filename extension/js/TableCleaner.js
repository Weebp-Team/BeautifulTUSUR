// Создаем функцию для удаления строк таблицы
function removeTableRows() {
  // Получаем все строки таблицы с классом "ng-scope do-not-need-to-study"
  var rows = document.querySelectorAll('.ng-scope.do-not-need-to-study');
  
  // Перебираем строки и удаляем их
  rows.forEach(function(row) {
    row.parentNode.removeChild(row);
  });
}

// Создаем функцию для отслеживания изменений в DOM
function observeDOM() {
  // Создаем новый экземпляр MutationObserver
  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      // Проверяем, есть ли на странице таблица с классом "ng-scope do-not-need-to-study"
      if (document.querySelector('.ng-scope.do-not-need-to-study')) {
        // Если таблица появилась, удаляем строки
        removeTableRows();
        
        // Отключаем наблюдение, так как больше не нужно
        observer.disconnect();
      }
    });
  });
  
  // Настраиваем наблюдение на изменения внутри <body> элемента
  observer.observe(document.body, { childList: true, subtree: true });
}

// Слушаем событие загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
  // Проверяем, есть ли на странице таблица с классом "ng-scope do-not-need-to-study"
  if (document.querySelector('.ng-scope.do-not-need-to-study')) {
    // Если таблица уже присутствует, удаляем строки
    removeTableRows();
  } else {
    // Если таблица еще не появилась, запускаем отслеживание изменений в DOM
    observeDOM();
  }
});
