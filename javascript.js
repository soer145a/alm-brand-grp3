function onLoad() {

	// if (window.innerWidth <= 768) {

	function toggleMenu() {
		document.querySelector(".burger").classList.toggle("change");
		document.querySelector("nav").classList.toggle("show");

		document.querySelector("#visit").classList.toggle("vis");
	}
	document.querySelector(".burger").addEventListener("click", toggleMenu);


	document.querySelector(".mySlider").addEventListener("input", visValue);




	function visValue() {
		document.querySelector("#valueDisplay").innerHTML = this.value;
		document.querySelector("#valueDisplay2").innerHTML = Math.round(this.value * 1.07);


	}


}

function visId() {
	console.log("test");
}


//}

document.addEventListener("DOMContentLoaded", function (event) {
	onLoad();
});
