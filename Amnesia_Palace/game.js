var i = 1;
var notList = [];

function mGame() {
	var x = document.getElementById("rem").value;
	x = x.toLowerCase();
	var items = ["picture", "violin", "umbrella", "marble", 
				"kettle", "teddy bear", "apple", "suitcase",
				"crib"];
	if (!items.includes(x) || notList.includes(x)) {
		box = i.toString();
		document.getElementById(box).innerHTML = "Wrong";
	}
	else {
		box =  i.toString();
		i += 1;
		notList.push(x);
		document.getElementById(box).innerHTML = x;
	}
	if (i == 10) {
		document.getElementById("wd").innerHTML = "Congratulations on remembering all of the items!";
		var button = document.createElement("button");
		button.innerHTML = "Go To Home";
		
		var body = document.getElementsByClassName("story_")[0];
		body.appendChild(button);

		button.addEventListener ("click", function() {
		window.location.href='../index.html';
	});
	}
	document.getElementById("rem").value = "";
}
