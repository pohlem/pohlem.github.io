function showOneDiv(anID) {
	var myMenus = document.querySelectorAll('.my-menus'),
	i = 0, l = myMenus.length;
	for (i; i < l; i++) {
		myMenus[i].style.display = 'none';
	}
	var div = document.getElementById(anID);
	div.style.display = "block";
}
function showHideDiv(anID) {
	var div = document.getElementById(anID);
	if(div.style.display=="none"){
		div.style.display = "block";
	} else {
		div.style.display="none";
	}
}