<?php
	
	// phpinfo();
		
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	$result;

	if($username == 'pippo' && $password == 'pippo'){

		$result = array('success' => true);

	}else{

		$result = array('success' => false);
	
	}	

	$jsonstring = json_encode($result);
	echo($jsonstring);
	

?>
