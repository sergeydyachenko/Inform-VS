$(document).ready(function(){
	$(".show-popup").on("click",function(){
		$(".popup").show();
	});
	$(".closed").on("click",function(){
		$(".popup").hide();
		$(".popup-send").hide();
	});
	$(".popup .button-input").on("click", function(e){
		// NAME
		var title = $(".popup .name-input").val();
		var regTitle = /^[А-ЯёЁіІ"'а-я\-\w\040\s0-9]{2,50}$/im;
		var resultTitle = title.search(regTitle);
		if(resultTitle !== 0){
			e.preventDefault();
			$(".popup .name-input").addClass("error");
		}
		else{
			$(".popup .name-input").removeClass("error");
		}
		// PHONE
		var phone = $(".popup .tel-input").val();
		var regPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
		var resultPhone = phone.search(regPhone);
		if(resultPhone !== 0){
			e.preventDefault();
			$(".popup .tel-input").addClass("error");
		}
		else{
			$(".popup .tel-input").removeClass("error");
		}

		if(resultPhone !== 0 || resultTitle !== 0){
			$(".message-error").show();
		}
		else{
			$(".message-error").hide();
		}
		if(resultPhone == 0 && resultTitle == 0){
			$(".popup").hide();
			$(".popup-send").show();
		}
	});
	 $(".skills").each(function(){
		var hThis = $(this).height();
		$(this).height(hThis);
	 });
});