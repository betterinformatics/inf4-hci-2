
/* Jquery stuff */

$('a').click(function(){
	$('html, body').animate({
		scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
	}, 500);
	return false;
});

/* Scroll to top show/hide: */
$(document).ready(function() {
	// Animate scroll to top
	$('#go-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
});
