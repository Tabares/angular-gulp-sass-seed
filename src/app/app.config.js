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