
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

	linkTag.setAttribute("rel", "stylesheet");
	linkTag.setAttribute("href", "css/darkmode.css");
	headTag.appendChild(linkTag);

	toggler.classList.add('dark');

	// console.log(toggler);
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