angular.module('examples')
	.filter('reverse', reverse);

function reverse() {
	return function(input) {
		if (input !== null && input !== undefined)
			return input.split('').reverse().join('');
	}
}

function uppercase() {
	return function(input) {
		if (input !== null && input !== undefined)
			return input.toUpperCase();
	}
}