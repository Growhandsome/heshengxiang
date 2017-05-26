$(function() { //banner h3
	var str = '移动互联，商机无限，创新链接，尽在指尖！';
	$('.sub .label').text('');
	var i = 0;
	var Text = setInterval(function() {
		i++;
		$('.sub .label').text(str.substr(0, i) + " | ");
		if(i == str.length) {
			//i=0;
			clearInterval(Text);
			$('.sub .label').text(str.substr(0, i));
		}
	}, 300)
})
$(function() { //banner img
	$('.sub .cont .Imgs img').css({
		left: 310,
	})
	$('.sub .cont .Imgs img').eq(0).animate({
		left: 0,
	})
	$('.sub .cont .Imgs img').eq(2).animate({
		left: 680,
	})

	function autoPlay(){
			var index = $(this).index();
			if(index == 0) {
				$('.sub .cont .Imgs img').eq(0).animate({
					left: 310,
					zIndex: 2,
					width: 412,

				}, function() {
					$('.sub .cont .Imgs').append($(this));
				})
				$('.sub .cont .Imgs img').eq(1).animate({
					left: 680,
					zIndex: 1,
					width: 370,

				})
				$('.sub .cont .Imgs img').eq(2).animate({
					left: 0,
					width: 370,
					zIndex: 0
				})
			} else if(index == 1) {
				$('.sub .cont .Imgs img').eq(0).animate({
					left: 310,
					zIndex: 2,
					width: 412,
				}, function() {
					$('.sub .cont .Imgs').append($(this));
				})
				$('.sub .cont .Imgs img').eq(1).animate({
					left: 680,
					zIndex: 1,
					width: 370
				})
				$('.sub .cont .Imgs img').eq(2).animate({
					left: 0,
					width: 370,
				})
			} else {
				$('.sub .cont .Imgs img').eq(0).animate({
					left: 310,
					zIndex: 2,
					width: 412,
				}, function() {
					$('.sub .cont .Imgs').append($(this));
				})
				$('.sub .cont .Imgs img').eq(1).animate({
					left: 680,
					zIndex: 1,
					width: 370
				})
				$('.sub .cont .Imgs img').eq(2).animate({
					left: 0,
					width: 370,
				})
			}
		
	}
	$('.sub .cont .Imgs img').on('click', function() {
		autoPlay();
	})
//	$('.sub .cont .Imgs img').on('mousemove', function() {
//		autoPlay();
//	})
//	$('.sub .cont .Imgs img').on('mouseout', function() {
//		autoPlay();
//	})
	setInterval(autoPlay,1000);
})


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
				$('.sub').css({
					paddingTop:61
				})
			}
		}
		
	})

})