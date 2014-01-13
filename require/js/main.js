;define('main', ['jquery', 'rotor'], (function ($, rotor) {

	var $element = $("#test" ); 

	$element.css("border", "2px solid red").add( "p" ).css( "background", "yellow" );
	
	rotor.rotate("te#st");	

}));