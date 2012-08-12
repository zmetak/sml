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

$(function() {

	function ordinal(num) {
		return num + (
			(num % 10 == 1 && num % 100 != 11) ? 'st' :
			(num % 10 == 2 && num % 100 != 12) ? 'nd' :
			(num % 10 == 3 && num % 100 != 13) ? 'rd' : 'th'
		);
	}

	$('h1');

});

