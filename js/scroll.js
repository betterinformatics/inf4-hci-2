
/* Scroll to Top */

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


/* Timeline */

$(function() {
    $(".clickable").click(function() {
        var parent_block = $(this).parent(".timeline-block");
        parent_block.toggleClass("complete");
        // TODO: In here, expand complete bar
        return false; // Suppress default behaviour
    });
});


/* Timleine scrollspy */

var affixers = function() {
    $('#t1Affix').affix({
        offset: {
            top: 660,
            bottom: function () {
                var fttr = $('#footer');
                var fttr_pos = fttr.height() + fttr.offset().top;
                return (this.bottom = fttr_pos - $('#mapHero').offset().top + 200)
            }
        }
    });

    $('#t2Affix').affix({
        offset: {
            top: function () {
                var hero = $('#mapHero');
                return (this.top = hero.offset().top + hero.outerHeight(true) - 40)
            },
            bottom: function () {
                return (this.bottom = $('#footer').outerHeight(true))
            }
        }
    });

    $('body').scrollspy({ target: '#t1Affix' });
    $('body').scrollspy({ target: '#t2Affix' });
};


$(document).ready(affixers);
$(window).resize(affixers);

/* Scroll around based on keyboard presses */

$(document).keydown(function(e) {
    switch(e.which) {
    /* Scroll to previous card: */
    case 37: // left
    case 38: // up
        // TODO!
        break;

    /* Scroll to next card:  */
    case 39: // right
    case 40: // down
        // TODO!
        break;

    default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

