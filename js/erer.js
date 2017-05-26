$(function() {
	var i = true;
	$(document).scroll(function(){
		var num = $(document).scrollTop();
		if(num>=320){
			if(i){
				i=false;
				$('.header').css({
					position:'fixed',
					top:-61,
					backgroundColor:'rgba(22,115,200,0.4)',
					zIndex:3
				})
				$('.header').animate({
					top:0,
					padding:0
				})
				$('.banner').css({
					paddingTop:61
				})
			}
		}
		
	})

})