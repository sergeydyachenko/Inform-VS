$(document).ready(function(){
	$(".questions-and-answers > div a").bind("click",questions);
	function questions(e){
		e.preventDefault()
		$(this).toggleClass("questions-click");
		if($(this).hasClass("questions-click")){
			$(this).parent().children("p").slideDown()
		}
		else{
			$(this).parent().children("p").slideUp()
		}
	}
});