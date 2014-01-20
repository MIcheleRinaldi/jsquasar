;define('views/login', [], (function () {
	
	var $username, $password, $submit, $errorMessage;

	console.log('module loaded');

	var initInteraction = function(){

		$username 	= $('#username');
		$password 	= $('#pwd');
		$submit		= $('#submit');

		$errorMessage = $('.error');

		$submit.click(onSubmit);

		console.log($username, $password);

	};

	var onSubmit = function(evt){

		evt.preventDefault();

		if(!checkField($username, 'where is the username?'))return;
		if(!checkField($password, 'where is the password?'))return;

		// Executed only if the checkField function returns true
		$errorMessage.css('display', 'none');
		$errorMessage.parent().css('background-color', 'transparent');

	};

	var checkField = function(field, msg){

		var result = true;

		if(field.val().length == 0){

			$errorMessage.css('display', 'block').text(msg);
			field.after($errorMessage);

			$errorMessage.parent().css('background-color', 'red');

			result = false;

		}

		return result;

	};

	return {

		init : initInteraction

	}

}))