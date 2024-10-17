/* The Document Object Model */

const selected = document.getElementById("selectMe");
console.assert(
	selected.textContent == "Selected by ID.",
	"You've got the wrong element.",
);

const list = document.createElement("ul");
list.style.backgroundColor = "pink";
document.body.appendChild(list);

for (let i = 0; i < 5; i++) {
	let e = document.createElement("li");
	e.innerText = `Item ${i}`;
	list.appendChild(e);
}

const title = document.createElement("h1");
title.textContent = "DOM Manipulation";
selected.insertAdjacentElement("beforebegin", title);

// textContent vs innerText vs innerHTML:

// innerHTML: Useful for setting or getting HTML content of an element.
list.innerHTML; // "<li>Item 0</li><li>Item 1</li><li>Item 2</li><li>Item 3</li><li>Item 4</li>"

// innerText: Text as rendered by the browser.
list.innerText; // "Item 0
// Item 1
// Item 2
// Item 3
// Item 4"

// textContent: Text as it appears in the markup.
list.textContent; // "Item 0Item 1Item 2Item 3Item 4"
