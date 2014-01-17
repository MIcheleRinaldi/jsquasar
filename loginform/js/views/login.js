;define('views/login', [], (function () {
	
	var $username, $password, $submit;

	console.log('module loaded');

	var initInteraction = function(){

		$username 	= $('#username');
		$password 	= $('#pwd');
		$submit		= $('#submit');

		$submit.click(onSubmit);

		console.log($username, $password);

	};

	var onSubmit = function(evt){

		evt.preventDefault();

		if(!checkField($username, 'where is the username?'))return;
		if(!checkField($password, 'where is the password?'))return;

	};

	var checkField = function(field, msg){

		if(field.val().length == 0){

			alert(msg);
			return false;

		}

		return true;

	};

	return {

		init : initInteraction

	}

}))