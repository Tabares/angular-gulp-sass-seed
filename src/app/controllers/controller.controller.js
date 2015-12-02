angular.module('examples')
	.controller('ScopeHomeController', ScopeHomeController)
	.controller('ThisHomeController', ThisHomeController)
	.controller('DataHomeController', DataHomeController)
	.controller('SharedHomeController', SharedHomeController)
	.controller('ChildController', ChildController);

ScopeHomeController.$inject = ['$scope'];
function ScopeHomeController($scope) {
	$scope.message = 'Hello from $scope primitive!';
	$scope.data = {
		message: 'Hello from $scope object property!'
	}
}

ChildController.$inject = ['$scope'];
function ChildController($scope) {

}

function ThisHomeController() {
	var self = this;
	self.message = 'Hello from "this" primitive!';
	self.data = {
		message: 'Hello from "this" object property!'
	}
}

DataHomeController.$inject = ['dataService'];
function DataHomeController(dataService) {
	this.message = dataService.data.message;
	this.data = dataService.data;
	console.log(this);
}

SharedHomeController.$inject = ['dataService'];
function SharedHomeController(dataService) {
	this.message = dataService.data.message;
	this.data = dataService.data;
}