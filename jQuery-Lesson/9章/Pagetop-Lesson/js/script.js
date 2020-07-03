$(function(){
	$('#back a').on('click',function(){
		$('bodt,html').animate({
			scrollTop:0
		},800);
		return false;
	});

});