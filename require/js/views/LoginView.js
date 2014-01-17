;define('views/LoginView', ['appframeworkui', 'controllers/Login'], (function (ui, controller) {
	
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

	var handleSuccesfulLogin = function(status){

		if(status){

			ui.popup('we, password errata');
			//$('body').append('<span>You are logged in</span>').addClass('success');

		}else{

			$('body').append('<span>You are NOT logged in</span>').addClass('failure');

		}

	};

	return {

		init: initInteraction,
		showErrorMessage: displayMessage,
		succesfulLogin: handleSuccesfulLogin

	};

}))