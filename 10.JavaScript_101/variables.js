/* Variable Declarations and Scope */

// The var statement declares function-scoped or globally-scoped variables,
// optionally initializing each to a value.
var a = 10;

if (true) {
	var a = 20;
}

function foo() {
	var a = 30;
}

if (a != 20) {
	console.error(`a is ${a}: Something went wrong!`);
}

// Hoisting:
//
// var declarations, wherever they occur in a script, are processed before any
// code within the script is executed. Declaring a variable anywhere in the
// code is equivalent to declaring it at the top. This also means that a
// variable can appear to be used before it's declared. This behavior is called
// hoisting, as it appears that the variable declaration is moved to the top of
// the function, static initialization block, or script source in which it
// occurs.
//
// If x was not declared below then we would get a ReferenceError saying that x
// is undefined.
void x;
var x;

// The let declaration declares re-assignable, block-scoped local variables,
// optionally initializing each to a value.'
let b = 10;

if (true) {
	let b = 20;
}

function bar() {
	let b = 30;
}

if (b != 10) {
	console.error(`b is ${b}: Something went wrong!`);
}

// The const declaration declares block-scoped local variables. The value of a
// constant can't be changed through reassignment using the assignment
// operator, but if a constant is an object, its properties can be added,
// updated, or removed.
const c = 10;

if (true) {
	const c = 20;
}

function baz() {
	const c = 30;
}

if (c != 10) {
	console.error(`c is ${c}: Something went wrong!`);
}
