
/*
	1) This script is not working in chrome mobile (for tablet)
	2) The darkmode button isn't toggling
	Remember to fix these
*/



// darkmode function

// const darkMode = () =>{
function darkMode(){
	let headTag = document.head;
	let linkTag = document.createElement("link");
	let toggler = document.getElementById("toggler");
	let darkModeLink = document.getElementById("darkModeLink");
	let darkmodePath = "css/darkmode.css";

	toggler.classList.toggle("darkmode");
	if (darkModeLink.getAttribute("href") === "") {
		darkModeLink.setAttribute("href", darkmodePath);
	} else {
		darkModeLink.setAttribute("href", "");
	}
	
	console.log();




	// linkTag.setAttribute("id", "darkModeLink");
	// linkTag.setAttribute("rel", "stylesheet");
	// linkTag.setAttribute("href", "");
	// headTag.appendChild(linkTag);


	// if (linkTag.getAttribute("href") === "") {
		// linkTag.setAttribute("href", darkmodePath);
	// } else {
		// linkTag.setAttribute("href", "");
		
		// linkTag.setAttribute("href", "null");
		// headTag.removeChild(linkTag);
	// }
	// document.removeChild(element)
	// console.log(toggler, linkTag)
	// console.log(linkTag.getAttribute("href"));

	// console.log(darkModeLink.getAttribute("href") === "light")
	// console.log(darkModeLink)
};







// onclick, call the darkmode function
// document.getElementById("toggler").addEventListener("click", darkMode);

// var x = document.getElementById("myBtn");
var toggler = document.getElementById("toggler");
if (toggler.addEventListener) {
  toggler.addEventListener("click", darkMode);
} else if (toggler.attachEvent) {
  toggler.attachEvent("onclick", darkMode);
}