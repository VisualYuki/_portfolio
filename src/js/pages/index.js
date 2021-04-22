//document.addEventListener("DOMContentLoaded", function(){
//	debugger;
//	console.log("hello");
//});


$(document).ready(function () {
	/* ------------- scroll ------------ */

	$("a[href^='#']").click(function () {
		var _href = $(this).attr("href");
		$("html, body").animate({ scrollTop: $(_href).offset().top - 100 + "px" });
		return false;
	});

});
