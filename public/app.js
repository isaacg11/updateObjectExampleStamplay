Stamplay.init('updatecustomobjecttutorial');

window.onload = function(){
	var objectInstance = new Stamplay.Cobject('object').Model;
	objectInstance.fetch('56244f3f43c9f31b462537ce').then(function() {
	var name = objectInstance.get('description');
	var date = objectInstance.get('dt_update');
	var id = objectInstance.get('_id');
	
	document.getElementById('objectOutputName').innerHTML = name;
	document.getElementById('objectOutputDate').innerHTML = date;
	document.getElementById('objectOutputID').innerHTML = id;
	});
};

function updateObject(){
	var id = document.getElementById('objectOutputID').innerHTML;
	var newName = document.getElementById('name').value;
	var objectInstance = new Stamplay.Cobject('object').Model;

	objectInstance.fetch(id).then(function(){
    objectInstance.set('description', newName);
    objectInstance.save();
    var description = objectInstance.get('description');
	var date = objectInstance.get('dt_update');

	document.getElementById('objectOutputName').innerHTML = description;
	document.getElementById('objectOutputDate').innerHTML = date;
	document.getElementById('name').value = "";

	});
}

