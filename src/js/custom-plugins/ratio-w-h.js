$(document).ready(function () {
   // скрипт для соблюдения пропорции изображения в зависимости от ширины изображения
   // ставит такую новую высоту, чтобы новая ширина/новая высота = ширина изображения(макет)/высота изображения (макет)
   setRatio();
   $(window).on("resize", function(){
      setRatio();
   });

   function setRatio() {
      $(".js-ratio-img").each(function(index,img){
         let imgWidth = img.offsetWidth;
         let srcHeight = img.getAttribute("data-src-h");
         let srcWidth = img.getAttribute("data-src-w");
         let newHeight = imgWidth * (srcHeight / srcWidth);
      
         $(img).css({
            height: newHeight + "px",
         });
      });
   }
   
});
