function mGame() {
	var x = document.getElementById("rem").value;
	var i = 1;
	var items = ["picture", "violin", "umbrella", "marble", 
				"kettle", "teddy bear", "apple", "suitcase",
				"crib"];
	if (b == 180) {
		angle = "Straight Angle";
	}
	else if (b > 360) {
		angle = "Value too great";
	}
	else if (b == 360) {
		angle = "Circle";
	}
	else if (b > 180) {
		angle = "Reflex Angle";
	}
	else {
		angle = "Obtuse Angle";
	}
}