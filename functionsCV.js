function showOneDiv(anID) {
	/*Shows one div and hide others*/
	var myMenus = document.querySelectorAll('.my-menus'),
	i = 0, l = myMenus.length;
	for (i; i < l; i++) {
		myMenus[i].style.display = 'none';
	}
	var div = document.getElementById('div'+anID);
	div.style.display = "block";
	/*Color the menu a who matches to the div selected*/
	var myNavA = document.querySelectorAll('.my-nav-a'), i = 0, l = myNavA.length;
	for (i; i < l; i++) {
		myNavA[i].style.backgroundColor = '#354458';
	}
	myNavA[anID-1].style.backgroundColor = '#080808';
}