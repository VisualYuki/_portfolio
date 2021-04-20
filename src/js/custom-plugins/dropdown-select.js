$(document).ready(function () {
   let lastDropdownSelect = undefined;

   // Показать выпадающий список при клике
   $(".dropdown-select").on("click", function (e) {
      if (lastDropdownSelect !== this) {
         $(lastDropdownSelect).removeClass("dropdown-select_active");
         lastDropdownSelect = this;
      }

      $(this).toggleClass("dropdown-select_active");
      e.stopPropagation();
   });

   // Выбрать опцию
   $(".dropdown-select__item").on("click", function () {
      let itemText = $(this).find(".dropdown-select__item-link").text();
      $(this).closest(".dropdown-select").find(".dropdown-select__text").html(itemText);
   });

   // Закрыть последний выпадающий список при клике на документ
   $(document).on("click", function () {
      $(lastDropdownSelect).removeClass("dropdown-select_active");
   });
});
