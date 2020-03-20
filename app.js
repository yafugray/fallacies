var modal_state = false;

function AdHominemToggle(){
	if(modal_state === false){
	document.querySelector(".adhominempage").style.display = "flex";
	modal_state = true;
	} else {
	document.querySelector(".adhominempage").style.display = "none";
	modal_state = false;
	}
}

function ScotsmanToggle(){
	if(modal_state === false){
	document.querySelector(".scotsmanpage").style.display = "flex";
	modal_state = true;
	} else {
	document.querySelector(".scotsmanpage").style.display = "none";
	modal_state = false;
	}
}

function BandwagonToggle(){
	if(modal_state === false){
	document.querySelector(".bandwagonpage").style.display = "flex";
	modal_state = true;
	} else {
	document.querySelector(".bandwagonpage").style.display = "none";
	modal_state = false;
	}
}

function EmotionToggle(){
	if(modal_state === false){
	document.querySelector(".emotionpage").style.display = "flex";
	modal_state = true;
	} else {
	document.querySelector(".emotionpage").style.display = "none";
	modal_state = false;
	}
}