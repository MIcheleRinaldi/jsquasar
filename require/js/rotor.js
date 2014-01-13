;define('rotor', [], (function () {

	var doRotate = function($node){

		$node.css('-webkit-transform', 'rotate(18deg)');

	};

	return{

		rotate: doRotate

	}

}));