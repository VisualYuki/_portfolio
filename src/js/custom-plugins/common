$(document).ready(function () {
   // треугольник поворачивающийся по клику на триггер элемент
   $(".triangle-rotate_js-click").on("click", function (e) {
      e.stopPropagation();
      $(this).toggleClass("triangle-rotate_active");
   });

   // при клике на документ удалить все активные блоки, если не сработала пагинация.
   $(document).on("click", function () {
      $(".triangle-rotate_js-click").removeClass("triangle-rotate_active");
      $(".dropdown-select__trigger").removeClass("dropdown-select__trigger_active");
   });

   // при выборе рейтинга, сохранить рейтинг
   $(".custom-raiting__item").on("click", function () {
      $(this).siblings(".custom-raiting__item.checked").removeClass("checked");
      $(this).addClass("checked");
   });
});
