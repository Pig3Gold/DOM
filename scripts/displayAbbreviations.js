function displayAbbreviations(){
	var abbreviations=document.getElementsByTagName("abbr");
	if (abbreviations.length <1) return false;
	var defs=new Array();
	for (var i = abbreviations.length - 1; i >= 0; i--) {
		var definition=abbreviations[i].getAttribute("title");
		var key=abbreviations[i].lastChild.nodeValue;
		defs[key]=definition;
		
	}
}