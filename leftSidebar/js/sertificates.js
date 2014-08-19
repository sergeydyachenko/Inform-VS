$(document).ready(function(){
	$(".sertificate").on("click",function(){
		$(".sertificates-js").show();
		var src = $(this).children("img").attr("data-big");
		$(".sertificates-js .sertificates-big").attr("src",src);
	});
		$(".closed").on("click",function(){
		$(".sertificates-js").hide();
	});
});