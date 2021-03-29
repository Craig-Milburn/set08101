	var i = 1;
function mGame() {
	var x = document.getElementById("rem").value;
	var items = ["picture", "violin", "umbrella", "marble", 
				"kettle", "teddy bear", "apple", "suitcase",
				"crib"];
	if (items.includes(x)) {
		box =  i.toString();
		i += 1;
		document.getElementById(box).innerHTML = x;
	}
	else {
		box = i.toString();
		document.getElementById(box).innerHTML = "Wrong";
	}
}