Stamplay.init('updatecustomobjecttutorial');

window.onload = function(){
	var objectInstance = new Stamplay.Cobject('object').Model;
	objectInstance.fetch('56244f3f43c9f31b462537ce').then(function() {
	var name = objectInstance.get('description');
	console.log(name);
	var date = objectInstance.get('dt_create');
	var id = objectInstance.get('_id');
	
	document.getElementById('objectOutputName').innerHTML = name;
	document.getElementById('objectOutputDate').innerHTML = date;
	document.getElementById('objectOutputID').innerHTML = id;
	});
};
