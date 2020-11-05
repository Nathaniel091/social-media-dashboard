// darkmode functionality
const darkMode = () =>{
	let headTag = document.head;
	let linkTag = document.createElement("link");

	linkTag.setAttribute("rel", "stylesheet");
	linkTag.setAttribute("href", "css/darkmode.css");
	headTag.appendChild(linkTag);

	toggler.classList.add('dark')
	console.log(toggler)
};
// onclick call the darkmode function
document.getElementById("toggler").addEventListener("click", darkMode);