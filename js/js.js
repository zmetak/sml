/*
	Author:
		Jules - HYPE studio s.r.o. 
		(http://www.hypestudio.sk) 
	Version: 
		0.1 (2012-08-12)   
		Copyright 2012, Hype Studio     
*/

//class replace extension
jQuery.fn.replaceClass = function(toReplace, replaceWith) {
	var $$ = jQuery(this);
	return $$.each(function() {
		return $$.removeClass(toReplace).addClass(replaceWith);
	});
}

//highlight stuff
jQuery.fn.highlight = function() {
	var $$ = jQuery(this);
	var hl = 'highlight';
	return $$.each(function() {
		if(!$$.hasClass(hl)) {
			$$.addClass(hl);
			setTimeout(function() { $$.removeClass(hl); }, 2000);
		}
		return $$;
	});
}

jQuery.fn.scrollPath("getPath", {scrollSpeed: 30,rotationSpeed: Math.PI / 10})
		.moveTo(400, 0, {name: "first"})
		.lineTo(400, 200, {name: "second"})
		.lineTo(400, 400, {name: "third"})
		.arc(900, 600, 500, Math.PI, Math.PI/2, true,{rotate: Math.PI/2, name: "fourth" })
		.lineTo(2000, 1100, {name: "fifth"});

$(function() {

	function ordinal(num) {
		return num + (
			(num % 10 == 1 && num % 100 != 11) ? 'st' :
			(num % 10 == 2 && num % 100 != 12) ? 'nd' :
			(num % 10 == 3 && num % 100 != 13) ? 'rd' : 'th'
		);
	}

		// We're done with the path, let's initate the plugin on our wrapper element
		$(".wrapper").scrollPath({drawPath: true, wrapAround: true});
		
		// Add scrollTo on click on the navigation anchors
	$("nav a").each(function() {
		var $$ = $(this);
		var target = $$.attr("href").replace("#", "");
		$$.click(function(e) {
			e.preventDefault();
			console.log('clicked '+target);
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});
		
});

