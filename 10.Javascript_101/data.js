/* Data Types and Data Structures */

console.log('Data Types and Data Structures:');

const string = 'hi';
const number = 3;
const float = 3.14;
const boolean = false;
const array = ['One', 2, 3.14, []];  // or 'list'
const emptyVariable = null;
const unknownReference = undefined;
const _function = function() {
	return "I'm a function";
}
const object = {
	'name': 'Hugh',
	'contact': {
		'phone': 1234567890,
		'email': 'hugh@example.com'
	}
}

console.log(array[0]);  // 'One'
console.log(_function());  // "I'm a function"
console.log(object['name']);  // 'Hugh'
