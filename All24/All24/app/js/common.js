$(function() {

	$('.top-nav__menu').click(function() {
		$('.top-nav__menu').toggleClass('active');
		$('.top-nav ul').slideToggle('500');
	})

	$('.righthomecolvn.col.center .line').hover(function() {
		$('.righthomecolvn.col.right .line').removeClass('hover').eq($(this).index()).addClass('hover')
	}, function(){
		$('.righthomecolvn.col.right .line').removeClass('hover');
	});

	$('.righthomecolvn.col.right .line').hover(function() {
		$('.righthomecolvn.col.center .line').removeClass('hover').eq($(this).index()).addClass('hover')
	}, function(){
		$('.righthomecolvn.col.center .line').removeClass('hover');
	});
});
