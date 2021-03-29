	var i = 1;
	var notList = [];
function mGame() {
	var x = document.getElementById("rem").value;
	var items = ["picture", "violin", "umbrella", "marble", 
				"kettle", "teddy bear", "apple", "suitcase",
				"crib","Picture", "Violin", "Umbrella", "Marble", 
				"Kettle", "Teddy bear", "Apple", "Suitcase",
				"Crib", "Teddy Bear"];
	if (items.includes(x)) {
		if (notList.includes(x)) {
			box = i.toString();
			document.getElementById(box).innerHTML = "Wrong";
		}
		else {
			box =  i.toString();
			i += 1;
			notList.push(x);
			document.getElementById(box).innerHTML = x;
		}
	}
	else {
		box = i.toString();
		document.getElementById(box).innerHTML = "Wrong";
	}
	document.getElementById("rem").value = "";
}