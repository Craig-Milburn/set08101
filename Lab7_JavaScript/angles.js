function myAngles() {
	var angle = "No value";
	var x = document.getElementById("size").value;
	var b = parseInt(x)
	if (b > 90) {
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
	else if (b < 90) {
		if (b > 0) {
		angle = "Acute Angle";
		}
		else {
			angle = "No angle";
		}
	}
	else {
		angle = "Right Angle";
	}
	 document.getElementById("result").innerHTML = angle;
}
	
