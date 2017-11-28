require('styles/3Dpage');
$(function(){
	$('#rangeValue').html($('#range').val());
	$('.container').css('perspective',$('#range').val() + "px")
	$('#range').on('input',function(e){
		$('#rangeValue').html($(this).val());
		$('.container').css('perspective',$(this).val() + "px")
	})
})
