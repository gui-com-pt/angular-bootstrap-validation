(function(){
	/**
	 * @ngdoc service
	 *
	 * @name bsProcessValidator
	 * @descripion
	 * This service is applied to directives in link function to watch for changes
	 * The ngClass is the AngularJS class to be matched. The validation is done by angular, we just check the classes applied
	 * The bsClass is the bootstrap class applied to the element in case it's dirty and has the ngClass passed
	 */
	angular
		.module('bs-validation')
		.factory('bsProcessValidator', ['$timeout', function($timeout) {
	        return function(scope, element, ngClass, bsClass) {
	            $timeout(function() {
	                var input = element.find('input');
	                if (!input.length) {
	                    input = element.find('select');
	                }
	                if (!input.length) {
	                    input = element.find('textarea');
	                }
	                if (input.length) {
	                    scope.$watch(function() {
	                        return input.hasClass(ngClass) && input.hasClass('ng-dirty');
	                    }, function(isValid) {
	                        element.toggleClass(bsClass, isValid);
	                    });
	                }
	            });
	        }
   	 }]);

})();