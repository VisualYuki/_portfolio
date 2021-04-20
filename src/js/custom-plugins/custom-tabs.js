
$(document).ready(function () {
   $(".default-tabs__trigger-item").on("click", function () {
      let tabIndex = $(this).data("index");
      let tabsWrap = $(this).closest(".default-tabs");
      let targetTab = $(tabsWrap).find(`.default-tabs__target-items > :nth-child(${tabIndex}) `);

      $(tabsWrap).find(".default-tabs__trigger-item").removeClass("default-tabs__trigger-item_active");
      $(this).addClass("default-tabs__trigger-item_active"); 
      
      $(tabsWrap).find(".default-tabs__target-item").removeClass("default-tabs__target-item_active");
      $(targetTab).addClass("default-tabs__target-item_active");
   });
});

//.default-tabs    
//   ul.default-tabs__trigger-items        
//      li.default-tabs__trigger-item(data-index="1") 1
//      li.default-tabs__trigger-item(data-index="2") 2
//      li.default-tabs__trigger-item(data-index="3") 3
//   ul.default-tabs__target-items  
//      li.default-tabs__target-item.default-tabs__target-item_active 1
//      li.default-tabs__target-item 2
//      li.default-tabs__target-item 3 
