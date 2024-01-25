// Your JS code here. If required.
let y=null
const code_container = document.querySelector(".code_container");

for (let i = 1; i <= 6; i++) {
    const input = document.createElement("input");
    input.className = "code";
	document.addEventListener("input",oninput)
    code_container.appendChild(input);
	input.maxLength=1
}

function oninput(x){
 const currentElement=x.target;
	if(currentElement.value){
		currentElement.nextElementSibling &&currentElement.nextElementSibling.focus()
	}

}
document.addEventListener("keydown",backw)

function backw(x){
	current_element=x.target;
	if(x.code=="Backspace"){
		
	current_element.nextElementSibling && current_element.previousElementSibling.focus();
	}
}