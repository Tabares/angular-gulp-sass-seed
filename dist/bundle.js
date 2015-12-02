angular.module('examples', ['ui.router']);
angular.module('examples')
	.factory('dataFactory', dataFactory);

function dataFactory() {
	var self = {};

	self.message = "Hello from data service primitive!";
	self.data = {
		message: "Hello from data service object property!"
	};

	return self;
}
angular.module('examples')
	.service('dataService', dataService);

function dataService() {
	var self = this;

	self.message = "Hello from data service primitive!";
	self.data = {
		message: "Hello from data service object property!"
	};
}
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
angular.module('examples')
	.config(config);

config.$inject = ['$stateProvider', '$urlRouterProvider'];
function config($stateProvider, $urlRouterProvider) {
	$stateProvider.state('home', {
		name: 'home',
		url: '/home',
		controller: 'HomeController as home',
		templateUrl: 'view/home.html'
	});
	$stateProvider.state('controller', {
		name: 'controller',
		url: '/controller',
		controller: 'MainController as main',
		templateUrl: 'view/controller.html'
	});
	$stateProvider.state('filter', {
		name: 'filter',
		url: '/filter',
		controller: 'FilterController as filter',
		templateUrl: 'view/filter.html'
	});
	$stateProvider.state('directive', {
		name: 'directive',
		url: '/directive',
		controller: 'DirectiveController as directive',
		templateUrl: 'view/directive.html'
	});

	$urlRouterProvider.otherwise('/home');
}
angular.module('examples')
	.controller('ScopeHomeController', ScopeHomeController)
	.controller('ThisHomeController', ThisHomeController)
	.controller('DataHomeController', DataHomeController)
	.controller('SharedHomeController', SharedHomeController)
	.controller('ChildController', ChildController);

ScopeHomeController.$inject = ['$scope'];
function ScopeHomeController($scope) {
	$scope.message = 'Hola desde Precision Agriculture!';
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
angular.module('examples')
	.controller('DirectiveController', DirectiveController);

function DirectiveController() {

}
angular.module('examples')
	.controller('HomeController', HomeController);

function HomeController() {

}
angular.module('examples')
	.controller('FilterController', FilterController);

function FilterController() {
	this.reverseMessage = 'I am reversed';
	this.uppercaseMessage = 'I am in uppercase';
}
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
angular.module('examples')
	.directive('red', red);

function red() {
	return {
		link: function(scope, element, attributes) {
			element.addClass('clickable');
			element.on('click', function(event) {
				event.preventDefault();
				element.toggleClass('red-font');
			});
		}
	}
}