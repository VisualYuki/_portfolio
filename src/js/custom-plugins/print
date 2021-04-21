$(document).ready(function () {
   // Скрыть все элементы, кроме нужных для печати
   $(".print-btn").on("click", function () {
      let body = $("body").html();
      let printEl = $(".print");
      $("body").html(printEl);
      window.print();
      $("body").html(body);
   });
});
