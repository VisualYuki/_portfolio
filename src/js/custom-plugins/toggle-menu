$(document).ready(function () {
   let lastToggleItem = $('.js-toggle-trigger.active')[0];
   $(".js-toggle-trigger").on("click", function () {
    
      if (this != lastToggleItem) {
         $(this).addClass("active");
         $(lastToggleItem).removeClass("active");

         lastToggleItem = this;
      }
      else if(this == lastToggleItem) {
         lastToggleItem = undefined;
         $(this).removeClass("active");
      }
   });

});
