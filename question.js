var modal_state = false;

function Correct(){
	if(modal_state === false){
	document.querySelector(".correctpage").style.display = "flex";
	modal_state = true;
	} else {
	document.querySelector(".correctpage").style.display = "none";
	modal_state = false;
	}
}

function Incorrect(){
	if(modal_state === false){
	document.querySelector(".incorrectpage").style.display = "flex";
	modal_state = true;
	} else {
	document.querySelector(".incorrectpage").style.display = "none";
	modal_state = false;
	}
}