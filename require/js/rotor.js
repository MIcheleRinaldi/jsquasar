;define('rotor', [], (function () {

	var doRotate = function($node){

		try{

			$node.css('-webkit-transform', 'rotate(18deg)');

		}catch(error){

			var indexFrom = $node.indexOf("#");

			if(indexFrom >= 0){

				$node = $node.substr(indexFrom + 1);

			}

			var element = document.getElementById($node);
			if(element)element.style.webkitTransform = "rotate(18deg)"

		}finally{

			console.log($node);

		};

	};

	return{

		rotate: doRotate

	}

}));