/* Rest and Spread Syntax */

// `...<name>` is the *rest*, for storing an arbitrary number of arguments in
// an array named <name>.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
function sum(...numbers) {
	return numbers.reduce((x, y) => x + y);
}

sum(1, 2, 3); // 6

// *spread* syntax is the opposite of rest, allowing an iterable to be unpacked
// into its elements.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
const items = [1, 2, 3];

console.log(items); // [1, 2, 3]
console.log(...items); // 1 2 3
