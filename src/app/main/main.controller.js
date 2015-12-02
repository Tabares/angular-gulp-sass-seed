angular.module('examples')
	.controller('MainController', MainController);

MainController.$inject = ['$scope', 'dataService'];
function MainController($scope, dataService) {
	$scope.$watch(function() { return dataService.message; },
		function(newVal, oldVal) {
			console.log('dataService.message changed from "' + oldVal + '" to "' + newVal + '"')
		});

	$scope.$watch(function() { return dataService.data.message; },
		function(newVal, oldVal) {
			console.log('dataService.data.message changed from "' + oldVal + '" to "' + newVal + '"')
		});

	$scope.$watch(function() { return dataService.data; },
		function(newVal, oldVal) {
			console.log('dataService.data changed from "' + JSON.stringify(oldVal) + '" to "' + JSON.stringify(newVal) + '"')
		});
}