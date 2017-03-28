var Ajax = function(settings) {
	var xhr = new XMLHttpRequest();	
	var module = {
		method: settings.method,
		url: settings.url,
		async: settings.async,
		data: settings.data,
		send: function() {			
			if (xhr.status != 200) {
				settings.error({status:xhr.status,statusText:xhr.statusText});
			} else {
				settings.success(this.responseText = xhr.responseText);
			}
		}
	}
	xhr.open(module.method, module.url, module.async);
	xhr.send();
	module.send();
	return module;
}

var require = function(urlJS) {
	return eval(Ajax({url:urlJS,method:'POST',async:false,data:'',success:function(val){return val;}}).responseText);
};

var getHTLM = function(urlHTML) {
	return Ajax({url:urlHTML,method:'POST',async:false,data:'',success:function(val){return val;}}).responseText;
}