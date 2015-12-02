angular.module('examples')
	.service('dataService', dataService);

function dataService() {
	var self = this;

	self.message = "Hello from data service primitive!";
	self.data = {
		message: "Hello from data service object property!"
	};
}