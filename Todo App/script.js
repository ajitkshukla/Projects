const textInput = document.getElementById("input-box");
const tasksList = document.getElementById("tasks-container");


function updateDateTime() {
	const now = new Date();
	const currentDateTime = now.toLocaleString();
	document.querySelector("#displayDate").textContent = currentDateTime;
}
updateDateTime();
function addTask() {
	if(textInput.value === '') {
		alert("You must give a task to add");
	}
	else {
		let task = document.createElement("li");
		task.innerHTML = textInput.value;
		tasksList.appendChild(task);
		let span = document.createElement("span");
		span.innerHTML = "\u00d7";
		task.appendChild(span);
		
	}
	textInput.value = '';
	saveData();
}

tasksList.addEventListener("click", function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
		saveData();
	}
	else if(e.target.tagName === "SPAN" && e.target.parentElement.classList.contains("checked")){
		e.target.parentElement.remove();
		saveData();
	}
},false);

function saveData(){
	localStorage.setItem("data", tasksList.innerHTML);
}

function loadData(){
	tasksList.innerHTML = localStorage.getItem("data");
}
setInterval(updateDateTime, 100);
loadData();
