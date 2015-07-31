(function(){
	/**
	 * @ngdoc directive
	 * @name bsHasError
	 *
	 * @description 
	 * When used, the input field will add "has-error" class to the element if its dirty and invalid
	 * Dont forget to add the class form-control to the element, as boostrap apply style with ".has-error .form-control {}"
	 */
	angular
		.module('bs-validation')
		.directive('bsHasError', ['bsProcessValidator', function(bsProcessValidator) {
	        return {
	            restrict: 'A',
	            link: function(scope, element) {
	                if (element[0].nodeName.toLowerCase() === 'form') {
	                    element.find('.form-group').each(function(i, formGroup) {
	                        bsProcessValidator(scope, angular.element(formGroup), 'ng-invalid', 'has-error');
	                    });
	                } else {
	                    bsProcessValidator(scope, element, 'ng-invalid', 'has-error');
	                }
	            }
	        }
    	}]);
})();