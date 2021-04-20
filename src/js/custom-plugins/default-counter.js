// выбор числа от с помощью кнопок лево и право.
$(".default-counter__right-arrow").on("click", function () {
   let value = $(this).parent(".default-counter").find("input").val();
   $(this)
      .parent(".default-counter")
      .find("input")
      .val(++value);
});

$(".default-counter__left-arrow").on("click", function () {
   let value = $(this).parent(".default-counter").find("input").val();
   if (value > 1)
      $(this)
         .parent(".default-counter")
         .find("input")
         .val(--value);
});

$(".default-counter__input").on("keyup", function (event) {
   let which = event.which;

   if (which < 48 || which > 57) {
      this.value = this.value.replace(/\D/g, "");
   } else {
      this.value = +this.value;
   }
});

$(".default-counter__input").on("focusout", function (e) {
   if (e.target.value == "") e.target.value = "0";
});
