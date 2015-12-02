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