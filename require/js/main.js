
;define('main', ['appframework', 'views/LoginView'], (function ($, login) {

	var init = function (){

		login.init();

	};

	$(document).ready(function(evt){

		login.init();

	});
	document.addEventListener('deviceready', init);

}));