;define('views/login', [], (function () {
	
	var $username, $password, $submit;

	console.log('module loaded');

	var initInteraction = function(){

		$username 	= $('#username');
		$password 	= $('#password');
		$submit		= $('#submit');

		$submit.click(onSubmit);

		console.log($username, $password);

	};

	var onSubmit = function(evt){

		evt.preventDefault();


	};

	return {

		init : initInteraction

	}

}))