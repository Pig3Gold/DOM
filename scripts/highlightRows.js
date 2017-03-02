function highlightRows(){
	if(!document.getElementsByTagName) return false;
	var rows= document.getElementsByTagName("tr");
	for (var i=0;i<rows.length;i++){
		var cols=rows[i].getElementsByTagName("td");
		cols[0].onmouseover =function(){
			this.style.fontWeight="bold";
		}
		rows[i].onmouseout=function(){
			this.style.fontWeight="normal";
		}
	}
}

addLoadEvent(highlightRows);