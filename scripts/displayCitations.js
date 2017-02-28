function displayCitations(){
	var cite=document.getElementsByTagName("blockquote");
	for(var i=0;i<cite.length ;i++){
		if(!cite[i].getAttribute("cite")) continue;
		var quotes=cite[i].getElementsByTagName("*");
		var ele=quotes[quotes.length -1];
	var url=cite[i].getAttribute("cite");
	var link=document.createElement("a");
	var link_text=document.createTextNode("source");
	link.appendChild(link_text);
	link.setAttribute("href",url);

	var sub=document.createElement("sup");
	sub.appendChild(link);

	ele.appendChild(sub);
}

	// var cl=document.createElement("dl");
	// for (key in source){
	// 	var cite_text=source[key];
	// 	var quote=document.createElement("qu");
	// 	var quote_text=document.createTextNode(cite_text);
	// 	quote.appendChild(quote_text);
	// 	cl.appendChild(quote);
	// }

	// document.body.appendChild(cl);
}

addLoadEvent(displayCitations);