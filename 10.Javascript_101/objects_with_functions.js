/* Functions Inside Objects */


const roger = {
	'name': 'Roger',
	'age': 10,
	// Functions are just values.
	// 'dentastick' is the *default* parameter
	'speak': function(want='dentastick') {
		console.log(`Hello I want a ${want}.`);
	}
}


// Two equivalent ways of calling the function:
roger.speak('walk!');
roger['speak']('treat!');
