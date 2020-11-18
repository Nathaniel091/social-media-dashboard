// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!----------------------------*/
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!----------------------------*/
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!----------------------------*/

	// 1) This script is not working in chrome mobile (for tablet)
	// 2) The darkmode button isn't toggling
	// Remember to fix these

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!----------------------------*/

const darkModeLinkTag = document.getElementById("darkModeLinkTag");
const toggler = document.getElementById("toggler");
const darkmodePath = "css/darkmode.css";


// Darkmode function
// This function toggles the darkmode button
function darkmode() {
	if (darkModeLinkTag.getAttribute("href") === "") {
		darkModeLinkTag.setAttribute("href", darkmodePath);
	} else {
		darkModeLinkTag.setAttribute("href", "");
	}
	toggler.classList.toggle("darkmode");
};
document.getElementById("toggler").addEventListener("click", darkmode);


// myContact function
// This function toggles myContactDetails
function myContact(){
	let myContactDetails = document.getElementById("myContactDetails");

	if (darkModeLinkTag.getAttribute("href") === "") {
		myContactDetails.classList.toggle("myContactDetailsLight");
	} else {
		myContactDetails.classList.toggle("myContactDetailsDark");
	}
};
document.getElementById("myContact").addEventListener("click", myContact);
