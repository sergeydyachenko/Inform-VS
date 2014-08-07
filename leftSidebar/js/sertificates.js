$(document).ready(function(){
	$(".sertificate-magnifier").on("click",function(){
		$(".sertificates-js").show();
		var src = $(this).parents().children("img").attr("src");
		var src = src.replace("mini-","big-");
		$(".sertificates-js .sertificates-big").attr("src",src);
	});
		$(".closed").on("click",function(){
		$(".sertificates-js").hide();
	});
});