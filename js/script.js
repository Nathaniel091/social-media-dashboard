// // let toggler = document.querySelector("#toggler");
// // toggler.className = "white-mode";
const darkMode = () =>{
	let headTag = document.head;
	let linkTag = document.createElement("link");

	linkTag.setAttribute("rel", "stylesheet");
	linkTag.setAttribute("href", "css/darkmode.css");
	headTag.appendChild(linkTag);
	console.log(linkTag)
}
document.getElementById("toggler").addEventListener("click", darkMode);
// // <link rel="stylesheet" type="text/css" href="./css/darkmode.css">