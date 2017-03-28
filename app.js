var route = require('js/Route.js');
var requireJS = Ajax({
	url:'test.php',
	method:'POST',
	async:false,
	success: function(val) {
		console.log(val);
	},
	error:function(status,text) {
		console.log(eval(status)+": "+text);
	}
});

var windows = require('js/Windows.js');

route.render('header', 'template/index.html');
route.render('menu', 'template/menu.html');