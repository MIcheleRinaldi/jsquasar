;define('views/LoginView', ['controllers/Login'], (function (controller) {
	
	var $errorMessage;
	var $username, $password, $loginForm;

	var initInteraction = function(){

		$username 	= $('#username');
		$password 	= $('#password');
		$loginForm 	= $('#login-form');

		$loginForm.bind('submit', onSubmit);

		controller.init()

	};

	var onSubmit = function(evt){

		evt.preventDefault();

		controller.login($username.val(), $password.val());	

	};

	var displayMessage = function(msg){

		if($errorMessage){

			$errorMessage.text(msg);

		}else{

			$loginForm.append('<span id ="error" class = "errorMessage" >' + msg + '</span>');
			$errorMessage = $('#error');
			
		}
	};

	return {

		init: initInteraction,
		showErrorMessage: displayMessage

	};

}))