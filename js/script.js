// darkmode functionality
const darkMode = () =>{
	alert('Click Event Now Working')
	let headTag = document.head;
	let linkTag = document.createElement("link");

	linkTag.setAttribute("rel", "stylesheet");
	linkTag.setAttribute("href", "css/darkmode.css");
	headTag.appendChild(linkTag);

	toggler.classList.add('dark');

	console.log(toggler)
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
