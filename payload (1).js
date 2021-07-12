// send the page title as a chrome message
//chrome.runtime.sendMessage(document.title);
	var i=0;
        var j=0;
	var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
	//var serRes = document.getElementById('ember949');
	var leadNames = document.getElementsByClassName('result-lockup__name');
       var leadPosition = document.getElementsByClassName('result-lockup__highlight-keyword');
       var leadCity = document.getElementsByClassName('result-lockup__misc-item'); 
//Var leadPos;
	for(i = 0; i < leadNames.length; i++){
             leadPos = leadPosition[i].getElementsByTagName('span');
		leadCom=leadPosition[i].getElementsByTagName('a')[0].getElementsByTagName('span');
		var linkSN = leadNames[i].getElementsByTagName('a')[0].getAttribute("href");
		tab_text = tab_text + "<tr>" + "<td>" + leadNames[i].innerText + "</td>" + "<td>" + leadPos[0].innerText +"</td>" + "<td>" + leadCom[0].innerText +"</td>"+ "<td>" + leadCity[i].innerText + "</td>" + "<td>" + linkSN +"</td>" + "</tr>";
	}

	tab_text=tab_text + "</table>";
	chrome.runtime.sendMessage(tab_text);