"use strict";
$(document).ready(function (){
	let isStarted = false;
	let isOver = false;
	$("#maze .boundary").mouseover(red);
	$("#end").mouseover(end);
	$("#start").click(reset);
	$("#maze").mouseleave(leave);
	
	function red(){
		if (isOver === false) {
			$("#maze .boundary").addClass("youlose");
			$("#status").text("You lose!");
			isOver = true;
		}
	}
	
	function reset(){
		isStarted = true;
		isOver = false;
		$("#maze .boundary").removeClass("youlose");
		$("#status").text("Restarted and Good luck!");
	}
	
	function end(){
		if (isOver === false){
			$("#status").text("You win!");
			isOver = true;
		}
	}
	
	function leave(){
		if (isStarted === true && isOver === false){
			$("#maze .boundary").addClass("youlose");
			$("#status").text("You lose!");	
			isStarted = false;
			isOver = true;
		}
	}
	
});