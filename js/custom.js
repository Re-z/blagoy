$(window).load(function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('body').addClass('ios');
	};
	$('body').removeClass('loaded'); 
});
/* viewport width */
function viewport(){
	var e = window, 
		a = 'inner';
	if ( !( 'innerWidth' in window ) )
	{
		a = 'client';
		e = document.documentElement || document.body;
	}
	return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */
$(function(){
	/* placeholder*/	   
	$('input, textarea').each(function(){
 		var placeholder = $(this).attr('placeholder');
 		$(this).focus(function(){ $(this).attr('placeholder', '');});
 		$(this).focusout(function(){			 
 			$(this).attr('placeholder', placeholder);  			
 		});
 	});
	/* placeholder*/

	$('.button-nav').click(function(){
		$(this).toggleClass('active'), 
		$('.main-nav-list').slideToggle(); 
		return false;
	});
	

});

var handler = function(){
	
	var height_footer = $('footer').height();	
	var height_header = $('header').height();	
	$('.content').css({'padding-bottom':height_footer+40, 'padding-top':height_header+40});
	
	
	var viewport_wid = viewport().width;
	
	if (viewport_wid <= 991) {
		
	}
	
}
$(window).bind('load', handler);
$(window).bind('resize', handler);



//bar dropdown
$('.bar__nav-has-dd').click(function(){
	$('.bar__catalogue').slideToggle().toggleClass('is-active');
	event.stopPropagation();
});
$('body').click(function(){
	$('.bar__catalogue').slideUp()
});
//$('.bar__catalogue, .bar__subcatalogue').click(function(){
//	return false;
//});


//slider
$('.slider__content').slick({
	dots: true,
	arrows: false,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				dots: false
			}
		}
	]
});
$('.slider__btn_prev').click(function(){
	$('.slider__content').slick('slickPrev')
});
$('.slider__btn_next').click(function(){
	$('.slider__content').slick('slickNext')
});

