/* Page Loading and Unloading Events */


/*
 * You may need to run a piece of code when the user leaves your webpage, for
 * example to alert them about unsaved changes, or save form data so users can
 * continue where they left off later on.
 *
 * You might also need to wait until the page has fully loaded before running
 * some code (e.g. to select and manipulate HTML elements).
 *
 * To achieve these aims you can add an event listener to the window object.
 */

// Do nothing until the page has fully loaded.	This is good practice,
// especially if the page has a lot of or deeply nested html.
window.addEventListener('onload', () => {
	alert('loaded');
});


// After the user has clicked, but before the page is refreshed.
//
// The 'beforeunload' event will not fire if there has been no user
// interaction with the site.	 "Without ANY interaction (even one click
// anywhere) beforeunload won't be fired."
// - https://stackoverflow.com/a/58064395
//
// See also:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event
window.addEventListener("beforeunload", (event) => {
	console.log(document.querySelector("#name").value)
	event.preventDefault();
});

// 'beforeunload' can be handled inconsistently (e.g. in Firefox), so you
// can also use the 'pagehide' event.
window.addEventListener("pagehide", () => {
	console.log(document.querySelector("#name").value);
});
