window.onload = function() {
	document.getElementById("button1").onclick = buttonClickEvent;	
	document.getElementById("checkbox1").onchange = toCheckOnCheckBox;
};

function buttonClickEvent(){
	setInterval(actionOfButton, 500);
}

function actionOfButton(){
	var textArea = document.getElementById ("textArea1");
	var style1 = window.getComputedStyle(textArea,null).getPropertyValue('font-size');
	var fontSize = parseInt(style1);
	textArea.style.fontSize = (fontSize + 2) + "px";
	console.log((fontSize + 2) + "px");	
}

function toCheckOnCheckBox(){
	var textArea = document.getElementById ("textArea1");
	if (document.getElementById("checkbox1").checked === true) {
		textArea.style.fontWeight = "bold";
		textArea.style.color = "green";
		textArea1.style.textDecoration = "underline"
		document.body.style.backgroundImage = "url('./Text Decorator_files/hundred-dollar-bill.jpg')";
	}else {
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea1.style.textDecoration = "none"
		document.body.style.backgroundImage = "none";
	}
	
}
