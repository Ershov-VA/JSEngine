(function(){
	var module = {
		name:'Роутер одностраничного web-приложения',
		ver:'0.0.1',
		all:function() {
			var links = document.getElementsByTagName('a');
			for (i=0; i<links.length;i++) {
				links[i].addEventListener('click', function(e) {
					e.preventDefault();
					module.render('app','template/'+this.getAttribute('href')+'.html');
				}, false);
			}
		},
		render:function(id,template) {
			var elem = document.getElementById(id);
			elem.innerHTML = getHTLM(template);
			this.all();
			return elem;
		}
	}
	return module;
})();