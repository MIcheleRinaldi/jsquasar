
;define('main', ['appframework', 'views/LoginView'], (function ($, login) {

	var init = function (){

		login.init();

	};

	$(document).ready(function(evt){

		login.init();
		$.ui.launch();

	});
	document.addEventListener('deviceready', init);

}));