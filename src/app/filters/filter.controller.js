angular.module('examples')
	.controller('FilterController', FilterController);

function FilterController() {
	this.reverseMessage = 'I am reversed';
	this.uppercaseMessage = 'I am in uppercase';
}