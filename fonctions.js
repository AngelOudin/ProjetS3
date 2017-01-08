function  getCookie(name){
	if(document.cookie.length == 0){
		return null;
	}
	var regSepCookie = new RegExp('(; )', 'g');
	var cookies = document.cookie.split(regSepCookie);
	for(var i = 0; i < cookies.length; i++){
		var regInfo = new RegExp('=', 'g');
	    var infos = cookies[i].split(regInfo);
	    if(infos[0] == name){
	    	return unescape(infos[1]);
	    }
	}
	return null;
}
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

