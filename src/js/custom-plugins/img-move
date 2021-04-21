$(document).ready(function () {
   // скрипт для переноса изображения предпросмотра на основное изображение

   $(".js-img-move__trigger").on("mouseenter", function () {
    
      let triggerImgSrc = $(this).find("img").attr("src");
      let triggerSourceSrc = $(this).find("source").attr("srcset");
      let targetImgWrap = $(this).closest(".js-img-move__parent").find(".js-img-move__target");

      $(targetImgWrap).find("img").attr("src", triggerImgSrc);
      $(targetImgWrap).find("source").attr("srcset", triggerSourceSrc);
   });
});
