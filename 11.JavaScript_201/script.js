// Do nothing until the page has fully loaded.	This is good practice,
// especially if the page has a lot of or deeply nested html.
// window.onload = () => {
//	alert('loaded');
// }

// After the user has clicked, but before the page is refreshed.
//
// The 'beforeunload' event will not fire if there has been no user
// interaction with the site.	 "Without ANY interaction (even one click
// anywhere) beforeunload won't be fired."
// - https://stackoverflow.com/a/58064395

// https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
const beforeUnloadHandler = (event) => {
	// Recommended
	event.preventDefault();

	// Included for legacy support, e.g. Chrome/Edge < 119
	event.returnValue = true;
};

const nameInput = document.querySelector("#name");

nameInput.addEventListener("input", (event) => {
	if (event.target.value !== "") {
		window.addEventListener("beforeunload", beforeUnloadHandler);
	} else {
		window.removeEventListener("beforeunload", beforeUnloadHandler);
	}
});

