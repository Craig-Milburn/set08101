var i = 1;
var notList = [];

function mGame() {
	var x = document.getElementById("rem").value;
	x = x.toLowerCase();
	console.log(x);
	var items = ["picture", "violin", "umbrella", "marble", 
				"kettle", "teddy bear", "apple", "suitcase",
				"crib"];
	if (!items.includes(x) || notList.includes(x)) {
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
	if (i == 10) {
		document.getElementById("wd").innerHTML = "Congratulations on remembering all of the items!";
	}
	document.getElementById("rem").value = "";
}
