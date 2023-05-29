// Слушаем событие загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
  // Получаем все строки таблицы с классом "ng-scope do-not-need-to-study"
  var rows = document.querySelectorAll('.ng-scope.do-not-need-to-study');
  
  // Перебираем строки и удаляем их
  rows.forEach(function(row) {
    row.parentNode.removeChild(row);
  });
});
