let btn_icon = document.querySelector(".btn_icon");

btn_icon.addEventListener("click", function() {
	let x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
});