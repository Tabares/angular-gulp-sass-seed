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