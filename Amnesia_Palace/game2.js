
var i = 1;
var notList = [];

function mGame() {
	document.getElementById("rem")
	.addEventListener("keyup", function(event) {
	event.preventDefault();
	if (event.keyCode === 13) {
		document.getElementById("mButton").click();
		}
	else {
		return;
		}
	});
	var x = document.getElementById("rem").value;
	x = x.toLowerCase();
	console.log(x);
	var items = ["picture", "violin", "umbrella", "marble", 
				"kettle", "teddy bear", "apple", "suitcase",
				"crib"];
	if (items.includes(x)) {
		if (notList.includes(x)) {
			box = i.toString();
			document.getElementById(box).innerHTML = "Wrong";
			console.log(x);
		}
		else {
			box =  i.toString();
			i += 1;
			notList.push(x);
			document.getElementById(box).innerHTML = x;
			console.log(notList);
		}
	}
	else {
		box = i.toString();
		//document.getElementById(box).innerHTML = "Wrong";
		console.log("Error here");
	}
	document.getElementById("rem").value = "";
}
